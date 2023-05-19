const DarkBadge = ({ label }: { label: string }) => {
  return (
    <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">
      {label}
    </span>
  );
};

export default DarkBadge;
