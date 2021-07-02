import { Pagination } from 'react-bootstrap';

export default function CustomPagination({ pagesCount, page, setPage }) {
  let items = [];
  for (let index = 1; index <= pagesCount; index++) {
    items.push(
      <Pagination.Item
        key={index}
        active={index === page}
        onClick={() => setPage(index)}
        activeLabel=""
      >
        {index}
      </Pagination.Item>
    );
  }
  console.log(items);

  return <Pagination>{items}</Pagination>;
}
