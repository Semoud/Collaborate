import LocationsCard from './LocationCard';

function Locations() {
	return (
		<div className='py-7 md:py-14 lg:py-28'>
			<div className='main-container'>
				<h2 className='text-3xl font-semibold md:text-4xl'>49 Locations near you</h2>
				<div className='no-scrollbar mt-5 flex snap-x snap-mandatory snap-always gap-12 overflow-scroll md:mt-10 lg:mt-20'>
					<LocationsCard name='131 Finsbury Pavement' area='Moorgate, London' image='./assets/location_131-finsburyPavement.jpg' />
					<LocationsCard name='30 Churchill Place' area='Canary Wharf, London' image='./assets/location_30-churchillPlace.jpg' />
					<LocationsCard name='Shoreditch Exchange' area='Hoxton, London' image='./assets/location_shoreditch-Exchange.jpg' />
					<LocationsCard name='12 Moorgate' area='Moorgate, London' image='./assets/location_12-moorgate.jpg' />
					<LocationsCard name='145 City Rd' area='Old Street, London' image='./assets/location_145-cityRd.jpg' />
					<LocationsCard name='1 St Katharines Way' area='Tower Hill, London' image='./assets/location_1stKatharinesWay.jpg' />
				</div>
			</div>
		</div>
	);
}

export default Locations;
