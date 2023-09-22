import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {
  const [jobsCategory, setJobsCategory] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setJobsCategory(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h2 className="text-4xl font-bold">Job Category List</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <h3>Hello</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 m-2">
        {jobsCategory.map((categorys) => (
          <Category key={categorys.id} categorys={categorys}></Category>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
