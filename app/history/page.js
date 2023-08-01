"use client"
import { useState, useEffect } from "react";
import EditTopicForm from "@/components/Global/EditTopicForm";
import Link from "next/link";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/order/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default function EditTopic({ params }) {
  const { id } = params;
  console.log({id})
  const [loading, setLoading] = useState(true);
  const [topic, setTopic] = useState(null);

  useEffect(() => {
    fetchTopicById();
  }, []);

  const fetchTopicById = async () => {
    try {
        console.log(id)
      const topicData = await getTopicById(id);
      console.log({topicData})
      setTopic(topicData);
      console.log({topic})
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p style={{marginTop: "200px"}}>Loading...</p>;
  }

  if (!topic) {
    return <p style={{marginTop: "200px"}}>Error: Topic not found.</p>;
  }

  const { title, desc } = topic?.order;
  console.log({ title, desc })

  return( <div style={{marginTop: "200px"}}>
          {topic?.order.map((t) => (
        <div >
          <div>
            <h2>{t.title}</h2>
            <div>{t.desc}</div>
          </div>
            <EditTopicForm id={t.id} title={t.title} desc={t.desc} />
          <div>
            {/* Add any additional content related to each topic */}
          </div><Link href={`/editTopic/${id}`}>
              <p>Pen</p>
            </Link>
        </div>
      ))}</div>
    
    )
}
