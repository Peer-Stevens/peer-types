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

export const fieldsToNamesMap: Record<string,string> = {
    avgGuideDogFriendly: "Guide Dog Friendliness",
    isMenuAccessibleAvg: "Menu Accessibility",
    noiseLevelAvg: "Noise Level",
    lightingAvg: "Lighting",
    isStaffHelpfulAvg: "Staff Helpfulness",
    isBathroomOnEntranceFloorAvg: "Bathroom On Entrance Floor",
    isContactlessPaymentOfferedAvg: "Contactless Payment Offered",
    isStairsRequiredAvg: "Stairs Required",
    spacingAvg: "Spacing",
  };

function buildNamesToFieldsMap(){
    let namesToFieldsMap: Record<string,string> = {};
    for(let key in fieldsToNamesMap){
      namesToFieldsMap[fieldsToNamesMap[key]] = key;
    }
    return namesToFieldsMap;
}

export const namesToFieldsMap = buildNamesToFieldsMap()
