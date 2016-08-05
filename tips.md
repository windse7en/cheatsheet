http://ricostacruz.com/cheatsheets/react.html
https://camjackson.net/post/9-things-every-reactjs-beginner-should-know

extends React.component,
1.  没有getInitialSate，用constructor来inital state的值。
2.  this.state = {}, constructor(props) 来传递state的值，但是这个值只用来初始化，要是与render有关，放到render里
3.  render(){ return ( <div></div> )} 渲染方法
4.  ReactCompoent.propTypes = {} 来检测props的参数类型
5.  ReactCompoent.defaultProps 设定初始值。
6.  const ReactComponent = props => ( <div></div> ) short way 来创建新的component
7.  如果没有显示，八成是因为props里面的attribute拼错了
