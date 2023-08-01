"use client"
import { useState, useEffect } from "react";
import EditTopicForm from "@/components/Global/EditTopicForm";
import Link from "next/link";

const getTopicById = async (id) => {
  console.log({id})
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
  console.log(params)
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
          
        <div >
          <div>
            <h2>{title}</h2>
            <div>{desc}</div>
          </div>

          <div>
            {/* Add any additional content related to each topic */}
          </div><Link href={`/editTopic/${id}`}>
              <p>Pen</p>
            </Link>
            
        </div>
    <EditTopicForm id={id} title={title} desc={desc} /></div> 
    )
}
