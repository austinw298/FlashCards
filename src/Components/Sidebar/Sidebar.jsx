import Collection from "../Collection/Collection"

const Sidebar = ({ collections }) => {
  const collectionsList = collections.map((collection) => {
    return <Collection collection = {collection}/>;
  });

  return <div>{collectionsList}</div>;
};

export default Sidebar;
