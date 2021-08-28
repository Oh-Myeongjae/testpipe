import React, { useEffect } from 'react';

const { kakao } = window;

const MapContainer = () => {

    useEffect(() => {
        const container = document.getElementById('myMap');
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3
		};
        const map = new kakao.maps.Map(container, options);
    }, []);
    console.log('map에 들어옴');

    return (
        <div id='myMap' style={{
            width: '500px', 
            height: '500px'      
        }}>
            <p>테스트 중입니다.</p>
            {
        console.log('map123에 들어옴')}
        </div>
    );
}

export default MapContainer; 