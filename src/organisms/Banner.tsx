import { BannerPart, BannerContainer } from '../molecules/BannerPart';

export default function StatBanner1() {
	return (
		<BannerContainer>
			<BannerPart title>Mattapan by the numbers</BannerPart>
			<BannerPart stat='39K' statColor='#db5649'>Bostonians living in Mattapan</BannerPart>
			<BannerPart stat='82%' statColor='#0589bf'>of the population is African American</BannerPart>
			<BannerPart stat='$44,744' statColor='#009687'>per year is the median household income status</BannerPart>
			<BannerPart stat='67+' statColor='#f27549'>acres of vibrant flora and fauna</BannerPart>
			<BannerPart stat='3408' statColor='#283593'>per 100k people have comitted a crime</BannerPart>
		</BannerContainer>
	)
}
