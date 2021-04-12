import { Component } from "react";


class Article extends Component {
    render () {

        const pieces = this.props.articles.map((item, index) => {
            return <div key={index} className="article"><h3 className="bluetitle">{item.title}</h3><p>{item.text}</p>
            <div className="social">{item.social}</div>
            </div>
        })

        return(<div>
            {pieces}
            </div>
        )


    }
}

export default Article