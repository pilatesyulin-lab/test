import { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  //submit은 전송하고 업데이트 시킨다. 전송만 하는게 아님
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(''); // value 값 초기화
      // submint 이벤트는 브라우저에서 새로고침을 발생시킨다
      // 이를 방지하기 위해
      e.preventDefault(); // 기본동작 (새로고침) 취소시켜
    },
    [onInsert, value], //변화가 된 부분은 리렌더링해야한다.
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
