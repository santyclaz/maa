import React from 'react';

import splashImg from 'assets/todo-1920.jpg';

const Todo: React.FC = () => {
	return (
		<div>
			<section className="splash img-container">
				<img
					src={splashImg}
					alt="splash"
					className="img-container__img--fill-height img-container__img--vertical-center img-container__img--horizontal-center"
				/>
				<span className="splash__text">To Do</span>
			</section>

			<section className="main-content">
				<h1>A Weekend in Dublin</h1>
				<p>
					<h2>Coffee</h2>
					<p>
						<h3>Kaph</h3> Located on Drury Street, this cafe is a calming
						retreat from a busy Grafton Street, and a perfect place to get some
						work done on your laptop if you need to work while you’re away.
					</p>
					<p>
						<h3>Clement & Pekoe</h3> Located on South William Street, this is a
						bustling cafe with a wide range of beans from local brewers. If
						espresso is not your thing you’ll be spoiled for choice with
						speciality loose leaf tea and matcha.
					</p>
					<p>
						<h3>Proper Order</h3> A little further out in Smithfield, this cafe
						is the home of award-winning baristas showcasing the best coffee
						beans from around the world if you want to taste something
						different.
					</p>
					<p>
						<h3>Industry</h3> Also located on Drury Street, this homeware
						shop-come-cafe has everything you’re looking for, from porridge for
						breakfast, to salads and hot-pots for lunch to go alongside their
						speciality coffee.
					</p>

					<h2>Food</h2>
					<p>
						<h3>Two Boys Brew - Phibsboro</h3> An incredible menu with the best
						flat white & avocado toast in Dublin.
					</p>
					<p>
						<h3>The Fumbally - Fumbally Lane, Dublin 8</h3> A top spot amongst
						food critics, but more importantly - Dog Friendly!! A menu
						consisting of incredibly tasty salads, 3fE coffee, and the best
						scrambled eggs you’ve ever had.
					</p>
					<p>
						<h3>Lucky Tortoise - Aungier Street</h3> The best Asian spot in
						Dublin… and dim sum ;) You can try the entire menu for €20.
					</p>
					<p>
						<h3>Shouk - Drumncondra</h3> The coolest veggie spot in Dublin. A
						spicer-hunters heaven with flavours of the middle east bringing life
						to their drool-worthy falafel.
					</p>
					<p>
						<h3>The People’s Park Market - Dun Laoghaire</h3> If you fancy a
						trip further a field, hope on the dart to Dun Laoghaire on a Sunday
						fir the market in People’s Park. With stalls from fresh, organic
						fruit and veg, hand-rolled ice-cream, and countless food stalls, you
						won’t go hungry.
					</p>

					<h2>Activities</h2>
					<h3>The Guinness Storehouse</h3>
					<p>
						An interactive experience that blends our brewing heritage with
						Irish history. 7 floors including shopping, cafe’s, tasting
						experience, a chance to pull your own pint, and a panoramic rooftop
						bar.
					</p>
					<h3>The Book of Kells</h3>
					<p>
						The illuminated manuscript of the first four gospels of the
						Christian New Testament is housed in the picturesque campus of
						Trinity College Dublin. View the oldest book in the world and then
						wander the hidden city of Trinity College in the heart of Dublin
						City Centre.
					</p>
					<h3>The Botanical Gardens</h3>
					<p>
						Located in Glasnevin, the Botanical Garden is home to over 300
						endangered plant species from around the world, including 6 species
						that are already extinct in the wild.
					</p>
					<h3>The Leprechaun Museum</h3>
					<p>
						Take a break from your serious self and step into the Otherworld.
						Folklore made fun brings your back to your childhood and immerses
						you in the world of myth and legend.
					</p>
					<h3>The Viking Tours</h3>
					<p>
						A thrilling tour around the main sights of Dublin - by land and
						water. Travelling on WWII amphibious vehicles, you are guaranteed a
						spellbinding tour of Viking Dublin.
					</p>
					<h3>The Hell Fire Club Hike</h3>
					<p>
						For the more fitness orientated people, The Hellfire Club walk is a
						must. A leisurely walk that takes you up Montpellier Hill to the
						ruins of s supposedly haunted hunting lodge. Take in the stunning
						views of the Piperstown Gap as you look out over Dublin City.
					</p>
				</p>

				<h1>A weekend in Galway</h1>
				<p>
					<h2>Coffee</h2>
					<h3>Coffewerk & Press - Quay Street</h3>
					<p>
						Part design-store, part cafe, Coffeewerk + Press combines art and
						coffee to showcase some of the best local and international talent.
						Make sure to venture upstairs for a bird’s eye view out over Quay
						Street in Galway’s Latin Quarter. Prime Instagram content for sure.
					</p>
					<h3>The Jungle Cafe - Forster Street</h3>
					<p>
						Chilled-out vibes, outdoor (covered) seating, and a leafy
						forest-esque decor, this is Galways answer to a tropical oasis.
					</p>
					<h3>McCambridges - Shop Street</h3>
					<p>
						Something of an institution in Galway, this cafe offers primal
						people-watching real-estate. It’s hard not to love this place, and
						their sandwich bar is out of this world.
					</p>
					<h3>Espresso 44 - Shop Street</h3>
					<p>
						A coffee snob’s haven, this bright orange cafe is hard to miss in
						the heart of Galway City on Shop Street. Hands down the best coffee
						in Galway but lacks seating to rest your feet so grab a coffee to go
						and head for a stroll down to Spanish Arch.
					</p>
					<h3>The Creamery - Salthill</h3>
					<p>
						Located on the The Promenade in Salthill this cafe is perfect to
						stop for a bit of lunch or grab a coffee or ice cream to go and take
						a stroll along the Prom to take in the fresh sea air.
					</p>
					<h2>Food</h2>
					<h3>Kai - Sea Road</h3>
					<p>
						Head to Galway’s West End and pick a meal or a slice of cake off the
						ever- changing menu in one of Galway’s most sought-after, award
						winning restaurants.
					</p>
					<h3>Dela - Dominic Street</h3>
					<p>
						Growing their own produce is one of the main priorities, and using
						as much fresh ingredients as possible in their brunch menu and
						dinner options, Dela offers us typical Scandinavian dishes with an
						Irish twist.
					</p>
					<h3>Cava Bodega - Middle Street</h3>
					<p>
						If sharing food with friends is more your style, then ordering
						Spanish tapas and wine from Cava will be right up your street. Quite
						the busy spot, their extensive wine menu and charming Mediterranean
						atmosphere is a must try for those wanting to share an evening with
						friends or someone special.
					</p>
					<h3>Dough Bros - Middle Street</h3>
					<p>
						Who doesn’t love pizza? Forget the takeaway and head for arguably
						the country’s best pizza. 100% locally owned and using as many Irish
						ingredients as possible, you can get one of their award-winning
						pizzas in their Middle Street restaurant or their pizza shop in
						O’Connell’s Beer Garden, Eyre Square.
					</p>
					<h3>Il Vicolo - The Bridge Mills, Dominic Street</h3>
					<p>
						If you love Italian food this is the place to go. Modern Italian
						dishes, including Venetian tapas in a stylish bar-restaurant set in
						a riverside mill. The best Italian in Ireland, you will not be
						disappointed.
					</p>
					<h2>Activities</h2>
					<h3>Walk Salthill Prom</h3>
					<p>
						Take a stroll along the 2 mile promenade of Salthill. The jewel of
						Galway city, it’s a breath to behold on a summer’s day. Overlooking
						the Clare hills, cliffs of Moher, and Aran Islands, there’s little
						that can surpass it. Make sure you mark the end of your walk like a
						true Galwegian by kicking the wall. If you’re feeling very daring,
						why not take a jump off Blackrock diving tower into the brisk
						Atlantic!
					</p>
					<h3>Cliffs of Moher</h3>
					<p>
						If transport is not an issue take a trip to Co. Clare to visit one
						of Irelands most famous heritage spots with breathtaking views.
						Harry Potter fans may recognise these as the home of Salazar
						Slytherin’s Locket from the Half-Blood Prince. While you can’t enter
						the sea cave, the Aillwee Caves are your next best bet.
					</p>
					<h3>Take a trip to Spiddal</h3>
					<p>
						Again, if transport is not an issue, take a drive out the Connemara
						road and immerse yourself in Irish Culture. Stop off in An Ceardlann
						for a spot of traditional Irish shopping and lunch in Builin Blasta.
					</p>
					<h3>Galway Walking Tour</h3>
					<p>
						Tribes free walking tour is offered throughout the year. You will
						discover why Galway is called the City of the Tribes, some of it’s
						history, the modern parts of the city, and why so many people from
						around the world fall in love with Galway.
					</p>
					<h3>A pint in Neactains</h3>
					<p>
						If you’re looking for some respite after taking in the city, take a
						seat outside Neactains and enjoy the best pint of Guinness Galway
						has to offer. The perfect people watching spot if the weather is
						good. If it get’s chilly the little snugs inside will keep you warm
						late into the night.
					</p>
					<h3>Diamond Hill</h3>
					<p>
						If you’re feeling like you need to burn off a few calories after a
						few days in ‘The Foodie Destination of The World 2020’ (BBC Good
						Food Magazine) then hop in a car and head for Connemara National
						Park in Letterfrack and climb Diamond Hill. An entire circuit of the
						Upper and Lower trails should take 2.5 to 3 hours.
					</p>
				</p>
			</section>
		</div>
	);
};

export default Todo;
