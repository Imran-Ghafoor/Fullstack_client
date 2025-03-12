import { useEffect, useState } from "react";
import { useAuth } from "../../store/Auth";
import { toast } from "react-toastify";

const AdminContacts = () => {
  const [contactData, setContactData] = useState([]);
  const { authorizationToken } = useAuth();
  const getContactsData = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Contacts Data", data);
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getContactsData();
  }, []);

  // delete contact
  const deleteContact = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      if (response.ok) {
        getContactsData();
        toast.success("deleted successfully");
      } else {
        toast.error("not deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="admin-contacts-section">
        <h1>Admin Contact Data</h1>

        <div className="container admin-users">
          {contactData.map((curContact, index) => {
            const { username, email, message, _id } = curContact;
            return (
              <div key={index}>
                <p>{username}</p>
                <p>{email}</p>
                <p>{message}</p>
                <button className="btn" onClick={() => deleteContact(_id)}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default AdminContacts;
