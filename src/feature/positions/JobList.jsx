import { useDispatch } from "react-redux";

import { addFilter } from "../filters/filter-slice";

import { usePositions } from "./use-positions";
import { useFetchPositions } from "./use-fetch-positions";

import { JobPosition } from "./JobPosition";

const JobList = () => {
  useFetchPositions();
  const positions = usePositions();
  const dispatch = useDispatch();

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  );
};

export { JobList };
