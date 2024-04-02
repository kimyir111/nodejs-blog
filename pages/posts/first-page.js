import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>Hello, my name is 김일</h1>
      <h1>I'm in the Department of Information Systems.</h1>
      <h1>Nice to meet you!!</h1>
      <h1>below link is my blug!</h1>
      <img id="hz" src="https://tistory1.daumcdn.net/tistory/4590401/attach/d23c7a5e5d5144dcacb7b08ad39f15c1" 
      width="300" height="80"></img>
      <h2>
        <a href="https://kimyir.tistory.com">Go to my blug</a>
      </h2>
      <h2>
        <Link href="/">No thanks, Go to home</Link>
      </h2>
    </>
  );
}