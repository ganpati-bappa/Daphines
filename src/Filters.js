import Reaact from 'react'

import './Filters.scss'
import {MdClose} from 'react-icons/md'

export const Filters = (props) => {

    let count = 0;
    
    return (
        <div className = "Filter_box_holder">
            <div className = "Filter_heading"> {props.heading} </div>
            <div className = "Filter_value">
                {props.filter.map((ele) => {
                    return (
                        <div className = {ele.selected ? "filter_name selected" : "filter_name" }
                            key = {`filter_name@${count++}`}>
                            {ele.name}    
                            {ele.selected ? (
                                <span><MdClose/></span>
                            ) : (
                                <></>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Filters;