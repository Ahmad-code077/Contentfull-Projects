import { createClient } from 'contentful';
import { useState } from 'react';
import { useEffect } from 'react';

const client = createClient({
  space: 'zift82hcspu6',
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchPerson = () => {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await client.getEntries({ content_type: 'projects' });
        const project = response.items?.map((item) => {
          const {
            fields: { title },
            fields: { url: projectUrl },
            fields: {
              image: {
                fields: {
                  file: { url },
                },
              },
            },
            sys: { id },
          } = item;
          return { title, projectUrl, url, id };
        });
        setLoading(false);
        setPeople(project);
      } catch (error) {
        console.log(error);
        setLoading(true);
      }
    };
    getData();
  }, []);
  return { loading, people };
};
