import { useSelector, useDispatch } from "react-redux";

import { Badge } from "UI/Badge";
import { Card } from "UI/Card";
import { Stack } from "UI/Stack";

import { selectFilters } from "store/filters/filter-selectors";
import { clearFilter, removeFilter } from "store/filters/filter-actions";

const FilterPanel = () => {
  const currentFilters = useSelector(selectFilters);
  const dispatch = useDispatch();

  if (currentFilters.length === 0) {
    return null;
  }
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map((filter) => (
            <Badge
              key={filter}
              variant="clearable"
              onClear={() => dispatch(removeFilter(filter))}
            >
              {filter}
            </Badge>
          ))}
          {/* <Badge variant="clearable">Frontend</Badge>
          <Badge variant="clearable">Backend</Badge>
          <Badge variant="clearable">React</Badge> */}
        </Stack>

        <button onClick={() => dispatch(clearFilter)} className="link">
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
