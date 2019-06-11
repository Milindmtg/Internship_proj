import React from 'react';
import ReactDOM from 'react-dom';
import {TopNav} from './components/topnav';
import {FormLogoWidget} from './components/form_logo_widget';
// import {Tree} from './components/Tree'
class Parent extends React.Component{
	render()
	{
		return(
			<div>
				<TopNav />
				<hr/>
				<FormLogoWidget />
				{/* <Tree/> */}
			</div>
		);
	}
}

ReactDOM.render(<Parent />, document.getElementById('root'));
