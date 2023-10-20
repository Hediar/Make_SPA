// 페이지 클래스
class Page {
  constructor() {
    // 페이지 생성자
    this.htmlString = ""; //  속성 초기화
  }
  render() {
    // 메서드 정의
    document.getElementById("root").innerHTML = this.htmlString;
  }
}
export default Page;
