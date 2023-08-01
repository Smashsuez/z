import ProfileUpdate from '@/components/Profile/ProfileUpdate';
import getAllUsers from '../api/user/route';
import Admin from '@/components/admin';
import UserList from '@/components/admin';
import Link from 'next/link';
import OrderList from "../../components/Global/OrderList.jsx"

const AdminDashboard = async () => {
  // Example usage in another file

  const fetchUsersData = async () => {
    try {
      // Call the function to get all users
      const allUsers = await getAllUsers();
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  
  // Call the function to fetch users' data
  fetchUsersData();

  const allUsers = await getAllUsers()
  

  return (
    <div style={{marginTop:"200px"}}>
{allUsers.map((user) =>{
        return<> <Link key={user.id} href={`/profile/admin/${user.id}`} >
        
          <p>Email: {user.email}</p>
          <p>Cash: {user.cash}</p>
        
      </Link><ProfileUpdate cash={user.cash} id={user.id} phone={user.phone}/><OrderList title={user.email}/> 
      </>
      })}
      
    </div>
  )
}

export default AdminDashboard