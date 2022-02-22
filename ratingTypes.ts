import type { ObjectId } from "mongodb";
import type { Place as GooglePlace } from "@googlemaps/google-maps-services-js";
 
type YesNoRating = 0 | 1 | null;
 
export interface Rating {
    _id?: ObjectId;
    userID: ObjectId;
    placeID: GooglePlace["place_id"];
    guideDogFriendly: number | null;
    isMenuAccessible: YesNoRating;
    noiseLevel: number | null;
    lighting: number | null;
    isStaffHelpful: YesNoRating;
    isBathroomOnEntranceFloor: YesNoRating;
    isContactlessPaymentOffered: YesNoRating;
    isStairsRequired: YesNoRating;
    spacing: number | null;
    comment: string | null;
    dateCreated: Date;
    dateEdited?: Date;
}

export type PlaceWithAccesibilityData = Place & {
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
	};
};

export type PlaceDetailsWithAccesibilityData = {
	result: Place;
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
	};
};
 
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
