import type { ObjectId } from "mongodb";
import type { Place as GooglePlace } from "@googlemaps/google-maps-services-js";

// Place type containing the place data pulled from the google api along with accesibility data
export type PlaceWithAccesibilityData = GooglePlace & {
	accessibilityData?: {
		_id: string;
		guideDogAvg: number;
		isMenuAccessibleAvg: number;
		noiseLevelAvg: number;
		lightingAvg: number;
		isStaffHelpfulAvg: number;
		isBathroomOnEntranceFloorAvg: number;
		isContactlessPaymentOfferedAvg: number;
		isStairsRequiredAvg: number;
		spacingAvg: number;
		promotion: {
			monthly_budget: number;
			max_cpc: number;
		};
	};
};

//Place type only containing the place ID along with the accesibility data
export interface Place {
	_id: GooglePlace["place_id"];
	guideDogAvg: number | null;
	isMenuAccessibleAvg: number | null;
	noiseLevelAvg: number | null;
	lightingAvg: number | null;
	isStaffHelpfulAvg: number | null;
	isBathroomOnEntranceFloorAvg: number | null;
	isContactlessPaymentOfferedAvg: number | null;
	isStairsRequiredAvg: number | null;
	spacingAvg: number | null;
	promotion: {
		monthly_budget: number;
		max_cpc: number;
	};
}

// Place type containing the place data pulled from the google api, the custom Place type, and promotion types
export type PlaceWithA11yAndPromo = GooglePlace & Place & {
	promoMonth?: PromotionMonth;
	isValidPromo?: boolean;
	isPromoted?: boolean;
	spend_amount?: number;
};

// Promotion month type to be used within the PlaceWithA11yAndPromo type
export interface PromotionMonth {
	_id?: ObjectId;
	placeID: GooglePlace["place_id"];
	month: number;
	year: number;
	totalSpent: number;
}
