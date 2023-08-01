"use client"
import { useState, useEffect } from "react";
import EditTopicForm from "@/components/Global/EditTopicForm";
import Link from "next/link";
import {useRouter} from "next/navigation";


const mat = () =>{
  const router = useRouter();

  router.refresh();
}

const getTopicById = async (email) => {
  
  try {
    console.log(101)
    const res = await fetch(`http://localhost:3000/api/history/${email}`, {
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

const HistoryComponent = ({ email }) => {
  const [loading, setLoading] = useState(true);
  const [topic, setTopic] = useState(null);

  useEffect(() => {
    fetchTopicById();
  }, []);

  const fetchTopicById = async () => {
    try {
      const topicData = await getTopicById(email);
      setTopic(topicData);
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

  return( <div style={{marginTop: "200px"}}>
          {topic?.order.map((t) => (
        <div >
          <div>
            <h2>{t.title}</h2>
            <div>{t.desc}</div>
          </div>

          <div>
            {/* Add any additional content related to each topic */}
          </div>
          {/* <Link href={`/editTopic/${id}`}>
              <p>Pen</p>
            </Link> */}
            <EditTopicForm id={t._id} title={t.title} desc={t.desc}  />
        </div>
      ))}
    </div> 
    )
}

export default HistoryComponent