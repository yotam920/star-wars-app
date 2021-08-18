import React from "react";
import { flattenDiagnosticMessageText } from "typescript";

interface film{
    title: string;
}
interface props{
films:film[];
}

interface states{
 
}


export default class TableOfContent extends React.Component<props,states>{

  constructor(props : props) {
    super(props);


  }

  componentDidMount(){
      console.log(this.props.films)
  }

render() {
    console.log(this.props.films);
    return (
        <span>{this.props.films[0].title}</span>
    )
}

}