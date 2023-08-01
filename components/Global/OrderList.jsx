"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";

const getTopics = async (title) => {
  try {
    const res = await fetch(`http://localhost:3000/api/order`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
    throw error; // Rethrow the error to handle it in the component
  }
};

export default function TopicsList({ name }) {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const data = await getTopics(name);
        setTopics(data.order);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchTopics();
  }, [name]); // Add 'title' to the dependency array to refetch topics when the title changes

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading topics: {error.message}</div>;
  }

  return (
    <>
      <Link href="/addOrder">Add New</Link>
      {/* {topics.map((t) => (
        <div key={t._id}>
          <div>
            <h2>{t.title}</h2>
            <div>{t.desc}</div>
          </div>

          <div>
          </div>

         
        </div>
      ))}  */}
      <Link href={`/editTopic/${name}`} passHref>
            <p>Edit</p>
          </Link>
    </>
  );
}
