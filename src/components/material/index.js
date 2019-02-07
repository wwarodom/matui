import React from 'react';

class Material extends React.Component {


    render() {
        console.log('updated state --->', this.state)
        const { data } = this.props

        return (
            <div>
            <h2> ครุภัณฑ์  </h2>
            <table border="1"><tbody>
            {
                data.map(obj => {
                    return (
                        <tr key={obj.code}>
                            <td>{obj.code}</td>
                            <td>{obj.name}</td>
                            <td>{obj.date}</td>
                            <td><a href={obj.url}> {obj.url} </a> </td>
                            <td> {obj.faculty} </td>
                            <td> {obj.count} </td>
                        </tr>
                    )
                })
            }
            </tbody>
            </table>
            </div>)
    }
}

export default Material;