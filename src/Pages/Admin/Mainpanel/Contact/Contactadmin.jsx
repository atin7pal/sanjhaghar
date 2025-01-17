import React, { useEffect, useState } from "react";
import axios from "axios";
import { Loader } from "../../../../Components/Loader/Loader";

const ContactTable = () => {
  const [contacts, setContacts] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    limit: 10,
    totalRecords: 0,
    totalPages: 0,
  });
  const [loading, setLoading] = useState(false);

  const fetchContacts = async (page = 1, limit = 10) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://sanjhaghar.com/retrievecontact.php?page=${page}&limit=${limit}`
      );
      const { contacts, pagination } = response.data;
      setContacts(contacts);
      setPagination(pagination);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts(pagination.currentPage, pagination.limit);
  }, [pagination.currentPage, pagination.limit]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= pagination.totalPages) {
      setPagination((prev) => ({ ...prev, currentPage: newPage }));
    }
  };

  
  return (
    loading === true ? <Loader/> :
  (
    <div className="p-6 bg-white rounded-md  w-full">
      <h2 className="text-3xl font-bold text-gray-700 mb-4">Contact Details</h2>

      {/* Table */}
      <div className="overflow-x-auto w-full border rounded-md">
        <table className="table-auto w-full border-collapse border-gray-200 rounded-md">
          <thead className="rounded-md border-b">
            <tr>
              <th className="px-4 py-2 text-left">Id</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Phone</th>
              <th className="px-4 py-2 text-left">City</th>
              <th className="px-4 py-2 text-left">Submitted At</th>
              <th className="px-4 py-2 text-left">Query</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500">
                  Loading...
                </td>
              </tr>
            ) : contacts.length > 0 ? (
              contacts.map((contact, index) => (
                <tr key={contact.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 ">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2">
                    {contact.name}
                  </td>
                  <td className="px-4 py-2 ">
                    {contact.email}
                  </td>
                  <td className="px-4 py-2 ">
                    {contact.phone}
                  </td>
                  <td className="px-4 py-2 ">
                    {contact.city}
                  </td>
                  <td className="px-4 py-2 ">
                    {new Date(contact.submitted_at).toLocaleString()}
                  </td>
                  <td className="px-4 py-2 ">
                    {contact.query}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500">
                  No contacts found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={() => handlePageChange(pagination.currentPage - 1)}
          className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md disabled:opacity-50"
          disabled={pagination.currentPage === 1}
        >
          Previous
        </button>
        <span className="text-gray-600">
          Page {pagination.currentPage} of {pagination.totalPages}
        </span>
        <button
          onClick={() => handlePageChange(pagination.currentPage + 1)}
          className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md disabled:opacity-50"
          disabled={pagination.currentPage === pagination.totalPages}
        >
          Next
        </button>
      </div>
    </div>
  )
  );
};

export default ContactTable;
