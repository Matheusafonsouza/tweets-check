import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Int32 } from 'mongodb';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type TweetDocument = Tweet & Document;

@Schema()
export class TweetUser {
  @Prop({ type: MongooseSchema.Types.ObjectId })
  id: string;
  @Prop()
  name: string;
  @Prop()
  screenName: string;
  @Prop({ type: MongooseSchema.Types.Mixed })
  location: any;
  @Prop()
  description: string;
  @Prop({ type: Boolean })
  contributorsEnabled: boolean;
  @Prop()
  profileImageURL: string;
  @Prop()
  biggerProfileImageURL: string;
  @Prop()
  miniProfileImageURL: string;
  @Prop()
  originalProfileImageURL: string;
  @Prop()
  profileImageURLHttps: string;
  @Prop()
  biggerProfileImageURLHttps: string;
  @Prop()
  miniProfileImageURLHttps: string;
  @Prop()
  originalProfileImageURLHttps: string;
  @Prop()
  defaultProfileImage: boolean;
  @Prop()
  URL: string;
  @Prop({ type: Boolean })
  protected: boolean;
  @Prop()
  followersCount: number;
  @Prop()
  profileBackgroundColor: string;
  @Prop()
  profileTextColor: string;
  @Prop()
  profileLinkColor: string;
  @Prop()
  profileSidebarFillColor: string;
  @Prop()
  profileSidebarBorderColor: string;
  @Prop({ type: Boolean })
  profileUseBackgroundImage: boolean;
  @Prop({ type: Boolean })
  defaultProfile: boolean;
  @Prop({ type: Boolean })
  showAllInlineMedia: boolean;
  @Prop()
  friendsCount: number;
  @Prop()
  createdAt: number;
  @Prop()
  favoritesCount: number;
  @Prop()
  utcOffset: number;
  @Prop()
  timeZone: string;
  @Prop()
  profileBackgroundImageURL: string;
  @Prop()
  profileBackgroundImageURLHttps: string;
  @Prop()
  profileBannerURL: string;
  @Prop()
  profileBannerRetinaURL: string;
  @Prop()
  profileBannerIpadURL: string;
  @Prop()
  profileBannerIpadRetinaURL: string;
  @Prop()
  profileBannerMobileURL: string;
  @Prop()
  profileBannerMobileRetinaURL: string;
  @Prop({ type: Boolean })
  profileBackgroundTiled: boolean;
  @Prop()
  lang: string;
  @Prop()
  statusesCount: number;
  @Prop({ type: Boolean })
  geoEnabled: boolean;
  @Prop({ type: Boolean })
  verified: boolean;
  @Prop({ type: Boolean })
  translator: boolean;
  @Prop()
  listedCount: number;
  @Prop({ type: Boolean })
  followRequestSent: boolean;
  @Prop()
  withHeldInCountries: any[];
}

@Schema()
export class Tweet {
  @Prop()
  text: string;
  @Prop()
  source: string;
  @Prop({ type: Boolean })
  truncated: boolean;
  @Prop({ type: MongooseSchema.Types.Number })
  inReplyToStatusId: number;
  @Prop({ type: MongooseSchema.Types.Number })
  inReplyToUserId: number;
  @Prop(String)
  inReplyToScreenName: string | null;
  @Prop({ type: MongooseSchema.Types.Mixed })
  geoLocation: any;
  @Prop({ type: MongooseSchema.Types.Mixed })
  place: any;

  @Prop({ type: Boolean })
  favorited: boolean;
  @Prop({ type: Boolean })
  retweeted: boolean;

  @Prop(Int32)
  favoriteCount: number;

  @Prop({ type: Boolean })
  retweet: false;
  @Prop()
  contributors: any[];
  @Prop(Int32)
  retweetCount: number;
  @Prop({ type: Boolean })
  retweetedByMe: boolean;
  @Prop()
  currentUserRetweetId: string;
  @Prop({ type: Boolean })
  possiblySensitive: boolean;
  @Prop()
  lang: string;
  @Prop()
  withheldInCountries: any[];
  @Prop()
  hashtagEntities: any[];
  @Prop()
  userMentionEntities: any[];
  @Prop()
  mediaEntities: any[];
  @Prop()
  symbolEntities: any[];
  @Prop()
  URLEntities: any[];

  @Prop()
  user: TweetUser;

  @Prop()
  createdAt: number;
}

export const TweetSchema = SchemaFactory.createForClass(Tweet);
