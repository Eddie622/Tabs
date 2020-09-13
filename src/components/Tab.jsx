import React, { useState } from 'react';

const Tab = (props) => {

    const [currentTab, setCurrentTab] = useState(0);

    const content = ["Tab 1 Content", "Tab 2 Content", "Tab 3 Content"];

    return (
        <div>
            <h1>Tabs</h1>
			<ul style={{display: 'flex', justifyContent: 'space-evenly', listStyleType: 'none'}}>
				<li onClick={e => setCurrentTab(0)}>Tab 1</li>
				<li onClick={e => setCurrentTab(1)}>Tab 2</li>
				<li onClick={e => setCurrentTab(2)}>Tab 3</li>
			</ul>
            <p>{content[currentTab]}</p>
        </div>
    )
}

export default Tab;