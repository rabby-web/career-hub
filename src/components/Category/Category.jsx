const Category = ({ categorys }) => {
  console.log(categorys);
  const { category_name, logo, availability } = categorys;
  return (
    <div className="bg-slate-100 m-2 p-4 space-y-2 rounded-md text-center flex flex-col items-center">
      <img src={logo} alt="" />
      <h2 className="text-2xl font-bold">{category_name}</h2>
      <h3 className="text-lg font-medium">{availability}</h3>
    </div>
  );
};

export default Category;
