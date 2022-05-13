import { useEffect, useRef, useState } from "react";
import { UsersData } from "../../utils/api/apiInterfaces";
import { fetchUsers } from "../../utils/api/";
import { clearLocalStorage, getLocalStorage } from "../../utils/localStorage";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";

export default function Users() {
  const navigate = useNavigate();
  const [users, setUsers] = useState<UsersData[]>([]);
  const loadMoreRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = getLocalStorage();
    fetchUsers(token!, "users", currentPage)
      .then((response) => {
        setUsers((old) => [...old, ...response.data]);
      })
      .then(() => setIsLoading(false))
      .catch(() => {
        if (token) {
          clearLocalStorage();
        }
        navigate("/");
      });
  }, [currentPage]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver((entities) => {
      const target = entities[0];
      if (target.isIntersecting) {
        setCurrentPage((old) => old + 1);
      }
    }, options);
    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }
  }, [isLoading]);

  function logOut() {
    clearLocalStorage();
    navigate("/");
  }

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="h-screen">
          <div className="flex justify-center items-center h-1/3">
            <span className="text-white text-3xl font-extrabold">Users</span>
            <span className="absolute right-0 h-1/3 flex flex-col">
              <span className="border-2 border-back3 p-1">
                <Button title="Logout" onPress={logOut} />
              </span>
            </span>
          </div>
          <div>
            <table className="w-full text-base text-center text-font">
              <thead className="text-lg text-font uppercase bg-back3">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((item) => (
                  <tr key={item.id} className="border-b border-back3">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-white whitespace-nowrap"
                    >
                      {item.id}
                    </th>
                    <td className="px-6 py-4">{item.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div ref={loadMoreRef}></div>
        </div>
      )}
    </div>
  );
}
