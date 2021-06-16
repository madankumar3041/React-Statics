import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<div className="header bg-white text-white py-2 shadow-sm">
				<div className="container">
					<div className="d-flex justify-content-between align-items-center ">
						<img
							className="mr-3"
							src="https://i.ibb.co/S0tb3Yh/Sjtpl-Logo.jpg"
							alt=""
							style={{ width: '150px' }}
						/>
					</div>
				</div>
			</div>
		);
	}
}
