import type { ObjectId } from "mongodb";
import type { Place as GooglePlace } from "@googlemaps/google-maps-services-js";

/**
 * Contains place data from the Google Places API along with accessibility
 * and promotion data from the Peer database.
 */
export type PlaceWithA11yData = GooglePlace & {
	accessibilityData?: {
		_id: GooglePlace["place_id"];
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

/**
 * Contains only accessibility and promotion data from the Peer database.
 * This is the type of the Place documents from the database.
 */
export type PlaceA11yData = {
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
};

/**
 * Contains place data from the Google Places API, the Peer database on accessibility,
 * and more detailed information about the promotion status of this location.
 */
export type PlaceWithA11yAndPromo = GooglePlace & {
	accessibilityData: PlaceA11yData;
	promoMonth?: PromotionMonth;
	isValidPromo?: boolean;
	isPromoted?: boolean;
	spend_amount?: number;
};

/**
 * Tracks information about when a location paid for a promotion with Peer.
 */
export type PromotionMonth = {
	_id?: ObjectId;
	placeID: GooglePlace["place_id"];
	month: number;
	year: number;
	totalSpent: number;
};
