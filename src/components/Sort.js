import { MdSearch } from 'react-icons/md';
import { useState } from 'react';

const Search = ({ notes, handleSortNote, setSortBy, handleTagFilter }) => {
  const [showTags, setShowTags] = useState(false);

  const onClick = () => {
    setShowTags(!showTags);
    handleTagFilter(null);
  };

  const sortHandler = (e) => {
    handleSortNote(e.target.value);
  };

  const sortByHandler = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div>
      <div className='flex space-x-4 mb-6'>
        <select
          className='container mx-auto flex items-center bg-gray-200 rounded-lg p-2 '
          // onChange={sortHandler}
          onChange={sortHandler}
        >
          <option>title</option>
          <option>date</option>
          <option>text</option>
        </select>
        <select
          className='rounded-lg px-5 py-1 bg-green-600 text-green-50'
          onChange={sortByHandler}
        >
          <option>ASC</option>
          <option>DESC</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
