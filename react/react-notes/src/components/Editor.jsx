import React from 'react'

const Editor = (props) => {

    const { updateEntity } = props;

    return (
        <div className="ui form">
            <div className="field">
                <textarea 
                    rows="5" 
                    placeholder='写点东西'
                    // react 是一个非常接近原生js 的框架
                    onInput={(event) => {
                        updateEntity(event);
                    }}
                    />
            </div>
        </div>
    )
}

export default Editor;