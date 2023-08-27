import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type ActivityLikeNotificationKeySpecifier = ('activity' | 'activityId' | 'context' | 'createdAt' | 'id' | 'type' | 'user' | 'userId' | ActivityLikeNotificationKeySpecifier)[];
export type ActivityLikeNotificationFieldPolicy = {
	activity?: FieldPolicy<any> | FieldReadFunction<any>,
	activityId?: FieldPolicy<any> | FieldReadFunction<any>,
	context?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActivityMentionNotificationKeySpecifier = ('activity' | 'activityId' | 'context' | 'createdAt' | 'id' | 'type' | 'user' | 'userId' | ActivityMentionNotificationKeySpecifier)[];
export type ActivityMentionNotificationFieldPolicy = {
	activity?: FieldPolicy<any> | FieldReadFunction<any>,
	activityId?: FieldPolicy<any> | FieldReadFunction<any>,
	context?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActivityMessageNotificationKeySpecifier = ('activityId' | 'context' | 'createdAt' | 'id' | 'message' | 'type' | 'user' | 'userId' | ActivityMessageNotificationKeySpecifier)[];
export type ActivityMessageNotificationFieldPolicy = {
	activityId?: FieldPolicy<any> | FieldReadFunction<any>,
	context?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActivityReplyKeySpecifier = ('activityId' | 'createdAt' | 'id' | 'isLiked' | 'likeCount' | 'likes' | 'text' | 'user' | 'userId' | ActivityReplyKeySpecifier)[];
export type ActivityReplyFieldPolicy = {
	activityId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isLiked?: FieldPolicy<any> | FieldReadFunction<any>,
	likeCount?: FieldPolicy<any> | FieldReadFunction<any>,
	likes?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActivityReplyLikeNotificationKeySpecifier = ('activity' | 'activityId' | 'context' | 'createdAt' | 'id' | 'type' | 'user' | 'userId' | ActivityReplyLikeNotificationKeySpecifier)[];
export type ActivityReplyLikeNotificationFieldPolicy = {
	activity?: FieldPolicy<any> | FieldReadFunction<any>,
	activityId?: FieldPolicy<any> | FieldReadFunction<any>,
	context?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActivityReplyNotificationKeySpecifier = ('activity' | 'activityId' | 'context' | 'createdAt' | 'id' | 'type' | 'user' | 'userId' | ActivityReplyNotificationKeySpecifier)[];
export type ActivityReplyNotificationFieldPolicy = {
	activity?: FieldPolicy<any> | FieldReadFunction<any>,
	activityId?: FieldPolicy<any> | FieldReadFunction<any>,
	context?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActivityReplySubscribedNotificationKeySpecifier = ('activity' | 'activityId' | 'context' | 'createdAt' | 'id' | 'type' | 'user' | 'userId' | ActivityReplySubscribedNotificationKeySpecifier)[];
export type ActivityReplySubscribedNotificationFieldPolicy = {
	activity?: FieldPolicy<any> | FieldReadFunction<any>,
	activityId?: FieldPolicy<any> | FieldReadFunction<any>,
	context?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AiringNotificationKeySpecifier = ('animeId' | 'contexts' | 'createdAt' | 'episode' | 'id' | 'media' | 'type' | AiringNotificationKeySpecifier)[];
export type AiringNotificationFieldPolicy = {
	animeId?: FieldPolicy<any> | FieldReadFunction<any>,
	contexts?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	episode?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AiringProgressionKeySpecifier = ('episode' | 'score' | 'watching' | AiringProgressionKeySpecifier)[];
export type AiringProgressionFieldPolicy = {
	episode?: FieldPolicy<any> | FieldReadFunction<any>,
	score?: FieldPolicy<any> | FieldReadFunction<any>,
	watching?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AiringScheduleKeySpecifier = ('airingAt' | 'episode' | 'id' | 'media' | 'mediaId' | 'timeUntilAiring' | AiringScheduleKeySpecifier)[];
export type AiringScheduleFieldPolicy = {
	airingAt?: FieldPolicy<any> | FieldReadFunction<any>,
	episode?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaId?: FieldPolicy<any> | FieldReadFunction<any>,
	timeUntilAiring?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AiringScheduleConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | AiringScheduleConnectionKeySpecifier)[];
export type AiringScheduleConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AiringScheduleEdgeKeySpecifier = ('id' | 'node' | AiringScheduleEdgeKeySpecifier)[];
export type AiringScheduleEdgeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AniChartUserKeySpecifier = ('highlights' | 'settings' | 'user' | AniChartUserKeySpecifier)[];
export type AniChartUserFieldPolicy = {
	highlights?: FieldPolicy<any> | FieldReadFunction<any>,
	settings?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CharacterKeySpecifier = ('age' | 'bloodType' | 'dateOfBirth' | 'description' | 'favourites' | 'gender' | 'id' | 'image' | 'isFavourite' | 'isFavouriteBlocked' | 'media' | 'modNotes' | 'name' | 'siteUrl' | 'updatedAt' | CharacterKeySpecifier)[];
export type CharacterFieldPolicy = {
	age?: FieldPolicy<any> | FieldReadFunction<any>,
	bloodType?: FieldPolicy<any> | FieldReadFunction<any>,
	dateOfBirth?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	favourites?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	isFavourite?: FieldPolicy<any> | FieldReadFunction<any>,
	isFavouriteBlocked?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	modNotes?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	siteUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CharacterConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | CharacterConnectionKeySpecifier)[];
export type CharacterConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CharacterEdgeKeySpecifier = ('favouriteOrder' | 'id' | 'media' | 'name' | 'node' | 'role' | 'voiceActorRoles' | 'voiceActors' | CharacterEdgeKeySpecifier)[];
export type CharacterEdgeFieldPolicy = {
	favouriteOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	voiceActorRoles?: FieldPolicy<any> | FieldReadFunction<any>,
	voiceActors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CharacterImageKeySpecifier = ('large' | 'medium' | CharacterImageKeySpecifier)[];
export type CharacterImageFieldPolicy = {
	large?: FieldPolicy<any> | FieldReadFunction<any>,
	medium?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CharacterNameKeySpecifier = ('alternative' | 'alternativeSpoiler' | 'first' | 'full' | 'last' | 'middle' | 'native' | 'userPreferred' | CharacterNameKeySpecifier)[];
export type CharacterNameFieldPolicy = {
	alternative?: FieldPolicy<any> | FieldReadFunction<any>,
	alternativeSpoiler?: FieldPolicy<any> | FieldReadFunction<any>,
	first?: FieldPolicy<any> | FieldReadFunction<any>,
	full?: FieldPolicy<any> | FieldReadFunction<any>,
	last?: FieldPolicy<any> | FieldReadFunction<any>,
	middle?: FieldPolicy<any> | FieldReadFunction<any>,
	native?: FieldPolicy<any> | FieldReadFunction<any>,
	userPreferred?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CharacterSubmissionKeySpecifier = ('assignee' | 'character' | 'createdAt' | 'id' | 'locked' | 'notes' | 'source' | 'status' | 'submission' | 'submitter' | CharacterSubmissionKeySpecifier)[];
export type CharacterSubmissionFieldPolicy = {
	assignee?: FieldPolicy<any> | FieldReadFunction<any>,
	character?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	locked?: FieldPolicy<any> | FieldReadFunction<any>,
	notes?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	submission?: FieldPolicy<any> | FieldReadFunction<any>,
	submitter?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CharacterSubmissionConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | CharacterSubmissionConnectionKeySpecifier)[];
export type CharacterSubmissionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CharacterSubmissionEdgeKeySpecifier = ('node' | 'role' | 'submittedVoiceActors' | 'voiceActors' | CharacterSubmissionEdgeKeySpecifier)[];
export type CharacterSubmissionEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	submittedVoiceActors?: FieldPolicy<any> | FieldReadFunction<any>,
	voiceActors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContinentKeySpecifier = ('code' | 'countries' | 'name' | ContinentKeySpecifier)[];
export type ContinentFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	countries?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CountryKeySpecifier = ('awsRegion' | 'capital' | 'code' | 'continent' | 'currencies' | 'currency' | 'emoji' | 'emojiU' | 'languages' | 'name' | 'native' | 'phone' | 'phones' | 'states' | 'subdivisions' | CountryKeySpecifier)[];
export type CountryFieldPolicy = {
	awsRegion?: FieldPolicy<any> | FieldReadFunction<any>,
	capital?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	continent?: FieldPolicy<any> | FieldReadFunction<any>,
	currencies?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	emoji?: FieldPolicy<any> | FieldReadFunction<any>,
	emojiU?: FieldPolicy<any> | FieldReadFunction<any>,
	languages?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	native?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	phones?: FieldPolicy<any> | FieldReadFunction<any>,
	states?: FieldPolicy<any> | FieldReadFunction<any>,
	subdivisions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeletedKeySpecifier = ('deleted' | DeletedKeySpecifier)[];
export type DeletedFieldPolicy = {
	deleted?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FavouritesKeySpecifier = ('anime' | 'characters' | 'manga' | 'staff' | 'studios' | FavouritesKeySpecifier)[];
export type FavouritesFieldPolicy = {
	anime?: FieldPolicy<any> | FieldReadFunction<any>,
	characters?: FieldPolicy<any> | FieldReadFunction<any>,
	manga?: FieldPolicy<any> | FieldReadFunction<any>,
	staff?: FieldPolicy<any> | FieldReadFunction<any>,
	studios?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FollowingNotificationKeySpecifier = ('context' | 'createdAt' | 'id' | 'type' | 'user' | 'userId' | FollowingNotificationKeySpecifier)[];
export type FollowingNotificationFieldPolicy = {
	context?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FormatStatsKeySpecifier = ('amount' | 'format' | FormatStatsKeySpecifier)[];
export type FormatStatsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	format?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FuzzyDateKeySpecifier = ('day' | 'month' | 'year' | FuzzyDateKeySpecifier)[];
export type FuzzyDateFieldPolicy = {
	day?: FieldPolicy<any> | FieldReadFunction<any>,
	month?: FieldPolicy<any> | FieldReadFunction<any>,
	year?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GenreStatsKeySpecifier = ('amount' | 'genre' | 'meanScore' | 'timeWatched' | GenreStatsKeySpecifier)[];
export type GenreStatsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	genre?: FieldPolicy<any> | FieldReadFunction<any>,
	meanScore?: FieldPolicy<any> | FieldReadFunction<any>,
	timeWatched?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InternalPageKeySpecifier = ('activities' | 'activityReplies' | 'airingSchedules' | 'characterSubmissions' | 'characters' | 'followers' | 'following' | 'likes' | 'media' | 'mediaList' | 'mediaSubmissions' | 'mediaTrends' | 'modActions' | 'notifications' | 'pageInfo' | 'recommendations' | 'reports' | 'reviews' | 'revisionHistory' | 'staff' | 'staffSubmissions' | 'studios' | 'threadComments' | 'threads' | 'userBlockSearch' | 'users' | InternalPageKeySpecifier)[];
export type InternalPageFieldPolicy = {
	activities?: FieldPolicy<any> | FieldReadFunction<any>,
	activityReplies?: FieldPolicy<any> | FieldReadFunction<any>,
	airingSchedules?: FieldPolicy<any> | FieldReadFunction<any>,
	characterSubmissions?: FieldPolicy<any> | FieldReadFunction<any>,
	characters?: FieldPolicy<any> | FieldReadFunction<any>,
	followers?: FieldPolicy<any> | FieldReadFunction<any>,
	following?: FieldPolicy<any> | FieldReadFunction<any>,
	likes?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaList?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaSubmissions?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaTrends?: FieldPolicy<any> | FieldReadFunction<any>,
	modActions?: FieldPolicy<any> | FieldReadFunction<any>,
	notifications?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	recommendations?: FieldPolicy<any> | FieldReadFunction<any>,
	reports?: FieldPolicy<any> | FieldReadFunction<any>,
	reviews?: FieldPolicy<any> | FieldReadFunction<any>,
	revisionHistory?: FieldPolicy<any> | FieldReadFunction<any>,
	staff?: FieldPolicy<any> | FieldReadFunction<any>,
	staffSubmissions?: FieldPolicy<any> | FieldReadFunction<any>,
	studios?: FieldPolicy<any> | FieldReadFunction<any>,
	threadComments?: FieldPolicy<any> | FieldReadFunction<any>,
	threads?: FieldPolicy<any> | FieldReadFunction<any>,
	userBlockSearch?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LanguageKeySpecifier = ('code' | 'name' | 'native' | 'rtl' | LanguageKeySpecifier)[];
export type LanguageFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	native?: FieldPolicy<any> | FieldReadFunction<any>,
	rtl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ListActivityKeySpecifier = ('createdAt' | 'id' | 'isLiked' | 'isLocked' | 'isPinned' | 'isSubscribed' | 'likeCount' | 'likes' | 'media' | 'progress' | 'replies' | 'replyCount' | 'siteUrl' | 'status' | 'type' | 'user' | 'userId' | ListActivityKeySpecifier)[];
export type ListActivityFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isLiked?: FieldPolicy<any> | FieldReadFunction<any>,
	isLocked?: FieldPolicy<any> | FieldReadFunction<any>,
	isPinned?: FieldPolicy<any> | FieldReadFunction<any>,
	isSubscribed?: FieldPolicy<any> | FieldReadFunction<any>,
	likeCount?: FieldPolicy<any> | FieldReadFunction<any>,
	likes?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	progress?: FieldPolicy<any> | FieldReadFunction<any>,
	replies?: FieldPolicy<any> | FieldReadFunction<any>,
	replyCount?: FieldPolicy<any> | FieldReadFunction<any>,
	siteUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ListActivityOptionKeySpecifier = ('disabled' | 'type' | ListActivityOptionKeySpecifier)[];
export type ListActivityOptionFieldPolicy = {
	disabled?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ListScoreStatsKeySpecifier = ('meanScore' | 'standardDeviation' | ListScoreStatsKeySpecifier)[];
export type ListScoreStatsFieldPolicy = {
	meanScore?: FieldPolicy<any> | FieldReadFunction<any>,
	standardDeviation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaKeySpecifier = ('airingSchedule' | 'autoCreateForumThread' | 'averageScore' | 'bannerImage' | 'chapters' | 'characters' | 'countryOfOrigin' | 'coverImage' | 'description' | 'duration' | 'endDate' | 'episodes' | 'externalLinks' | 'favourites' | 'format' | 'genres' | 'hashtag' | 'id' | 'idMal' | 'isAdult' | 'isFavourite' | 'isFavouriteBlocked' | 'isLicensed' | 'isLocked' | 'isRecommendationBlocked' | 'isReviewBlocked' | 'meanScore' | 'mediaListEntry' | 'modNotes' | 'nextAiringEpisode' | 'popularity' | 'rankings' | 'recommendations' | 'relations' | 'reviews' | 'season' | 'seasonInt' | 'seasonYear' | 'siteUrl' | 'source' | 'staff' | 'startDate' | 'stats' | 'status' | 'streamingEpisodes' | 'studios' | 'synonyms' | 'tags' | 'title' | 'trailer' | 'trending' | 'trends' | 'type' | 'updatedAt' | 'volumes' | MediaKeySpecifier)[];
export type MediaFieldPolicy = {
	airingSchedule?: FieldPolicy<any> | FieldReadFunction<any>,
	autoCreateForumThread?: FieldPolicy<any> | FieldReadFunction<any>,
	averageScore?: FieldPolicy<any> | FieldReadFunction<any>,
	bannerImage?: FieldPolicy<any> | FieldReadFunction<any>,
	chapters?: FieldPolicy<any> | FieldReadFunction<any>,
	characters?: FieldPolicy<any> | FieldReadFunction<any>,
	countryOfOrigin?: FieldPolicy<any> | FieldReadFunction<any>,
	coverImage?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	duration?: FieldPolicy<any> | FieldReadFunction<any>,
	endDate?: FieldPolicy<any> | FieldReadFunction<any>,
	episodes?: FieldPolicy<any> | FieldReadFunction<any>,
	externalLinks?: FieldPolicy<any> | FieldReadFunction<any>,
	favourites?: FieldPolicy<any> | FieldReadFunction<any>,
	format?: FieldPolicy<any> | FieldReadFunction<any>,
	genres?: FieldPolicy<any> | FieldReadFunction<any>,
	hashtag?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	idMal?: FieldPolicy<any> | FieldReadFunction<any>,
	isAdult?: FieldPolicy<any> | FieldReadFunction<any>,
	isFavourite?: FieldPolicy<any> | FieldReadFunction<any>,
	isFavouriteBlocked?: FieldPolicy<any> | FieldReadFunction<any>,
	isLicensed?: FieldPolicy<any> | FieldReadFunction<any>,
	isLocked?: FieldPolicy<any> | FieldReadFunction<any>,
	isRecommendationBlocked?: FieldPolicy<any> | FieldReadFunction<any>,
	isReviewBlocked?: FieldPolicy<any> | FieldReadFunction<any>,
	meanScore?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaListEntry?: FieldPolicy<any> | FieldReadFunction<any>,
	modNotes?: FieldPolicy<any> | FieldReadFunction<any>,
	nextAiringEpisode?: FieldPolicy<any> | FieldReadFunction<any>,
	popularity?: FieldPolicy<any> | FieldReadFunction<any>,
	rankings?: FieldPolicy<any> | FieldReadFunction<any>,
	recommendations?: FieldPolicy<any> | FieldReadFunction<any>,
	relations?: FieldPolicy<any> | FieldReadFunction<any>,
	reviews?: FieldPolicy<any> | FieldReadFunction<any>,
	season?: FieldPolicy<any> | FieldReadFunction<any>,
	seasonInt?: FieldPolicy<any> | FieldReadFunction<any>,
	seasonYear?: FieldPolicy<any> | FieldReadFunction<any>,
	siteUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>,
	staff?: FieldPolicy<any> | FieldReadFunction<any>,
	startDate?: FieldPolicy<any> | FieldReadFunction<any>,
	stats?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	streamingEpisodes?: FieldPolicy<any> | FieldReadFunction<any>,
	studios?: FieldPolicy<any> | FieldReadFunction<any>,
	synonyms?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	trailer?: FieldPolicy<any> | FieldReadFunction<any>,
	trending?: FieldPolicy<any> | FieldReadFunction<any>,
	trends?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	volumes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaCharacterKeySpecifier = ('character' | 'characterName' | 'dubGroup' | 'id' | 'role' | 'roleNotes' | 'voiceActor' | MediaCharacterKeySpecifier)[];
export type MediaCharacterFieldPolicy = {
	character?: FieldPolicy<any> | FieldReadFunction<any>,
	characterName?: FieldPolicy<any> | FieldReadFunction<any>,
	dubGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	roleNotes?: FieldPolicy<any> | FieldReadFunction<any>,
	voiceActor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | MediaConnectionKeySpecifier)[];
export type MediaConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaCoverImageKeySpecifier = ('color' | 'extraLarge' | 'large' | 'medium' | MediaCoverImageKeySpecifier)[];
export type MediaCoverImageFieldPolicy = {
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	extraLarge?: FieldPolicy<any> | FieldReadFunction<any>,
	large?: FieldPolicy<any> | FieldReadFunction<any>,
	medium?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaDataChangeNotificationKeySpecifier = ('context' | 'createdAt' | 'id' | 'media' | 'mediaId' | 'reason' | 'type' | MediaDataChangeNotificationKeySpecifier)[];
export type MediaDataChangeNotificationFieldPolicy = {
	context?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaId?: FieldPolicy<any> | FieldReadFunction<any>,
	reason?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaDeletionNotificationKeySpecifier = ('context' | 'createdAt' | 'deletedMediaTitle' | 'id' | 'reason' | 'type' | MediaDeletionNotificationKeySpecifier)[];
export type MediaDeletionNotificationFieldPolicy = {
	context?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	deletedMediaTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	reason?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaEdgeKeySpecifier = ('characterName' | 'characterRole' | 'characters' | 'dubGroup' | 'favouriteOrder' | 'id' | 'isMainStudio' | 'node' | 'relationType' | 'roleNotes' | 'staffRole' | 'voiceActorRoles' | 'voiceActors' | MediaEdgeKeySpecifier)[];
export type MediaEdgeFieldPolicy = {
	characterName?: FieldPolicy<any> | FieldReadFunction<any>,
	characterRole?: FieldPolicy<any> | FieldReadFunction<any>,
	characters?: FieldPolicy<any> | FieldReadFunction<any>,
	dubGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	favouriteOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isMainStudio?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	relationType?: FieldPolicy<any> | FieldReadFunction<any>,
	roleNotes?: FieldPolicy<any> | FieldReadFunction<any>,
	staffRole?: FieldPolicy<any> | FieldReadFunction<any>,
	voiceActorRoles?: FieldPolicy<any> | FieldReadFunction<any>,
	voiceActors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaExternalLinkKeySpecifier = ('color' | 'icon' | 'id' | 'isDisabled' | 'language' | 'notes' | 'site' | 'siteId' | 'type' | 'url' | MediaExternalLinkKeySpecifier)[];
export type MediaExternalLinkFieldPolicy = {
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	icon?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isDisabled?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	notes?: FieldPolicy<any> | FieldReadFunction<any>,
	site?: FieldPolicy<any> | FieldReadFunction<any>,
	siteId?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaListKeySpecifier = ('advancedScores' | 'completedAt' | 'createdAt' | 'customLists' | 'hiddenFromStatusLists' | 'id' | 'media' | 'mediaId' | 'notes' | 'priority' | 'private' | 'progress' | 'progressVolumes' | 'repeat' | 'score' | 'startedAt' | 'status' | 'updatedAt' | 'user' | 'userId' | MediaListKeySpecifier)[];
export type MediaListFieldPolicy = {
	advancedScores?: FieldPolicy<any> | FieldReadFunction<any>,
	completedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	customLists?: FieldPolicy<any> | FieldReadFunction<any>,
	hiddenFromStatusLists?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaId?: FieldPolicy<any> | FieldReadFunction<any>,
	notes?: FieldPolicy<any> | FieldReadFunction<any>,
	priority?: FieldPolicy<any> | FieldReadFunction<any>,
	private?: FieldPolicy<any> | FieldReadFunction<any>,
	progress?: FieldPolicy<any> | FieldReadFunction<any>,
	progressVolumes?: FieldPolicy<any> | FieldReadFunction<any>,
	repeat?: FieldPolicy<any> | FieldReadFunction<any>,
	score?: FieldPolicy<any> | FieldReadFunction<any>,
	startedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaListCollectionKeySpecifier = ('customLists' | 'hasNextChunk' | 'lists' | 'statusLists' | 'user' | MediaListCollectionKeySpecifier)[];
export type MediaListCollectionFieldPolicy = {
	customLists?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextChunk?: FieldPolicy<any> | FieldReadFunction<any>,
	lists?: FieldPolicy<any> | FieldReadFunction<any>,
	statusLists?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaListGroupKeySpecifier = ('entries' | 'isCustomList' | 'isSplitCompletedList' | 'name' | 'status' | MediaListGroupKeySpecifier)[];
export type MediaListGroupFieldPolicy = {
	entries?: FieldPolicy<any> | FieldReadFunction<any>,
	isCustomList?: FieldPolicy<any> | FieldReadFunction<any>,
	isSplitCompletedList?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaListOptionsKeySpecifier = ('animeList' | 'mangaList' | 'rowOrder' | 'scoreFormat' | 'sharedTheme' | 'sharedThemeEnabled' | 'useLegacyLists' | MediaListOptionsKeySpecifier)[];
export type MediaListOptionsFieldPolicy = {
	animeList?: FieldPolicy<any> | FieldReadFunction<any>,
	mangaList?: FieldPolicy<any> | FieldReadFunction<any>,
	rowOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	scoreFormat?: FieldPolicy<any> | FieldReadFunction<any>,
	sharedTheme?: FieldPolicy<any> | FieldReadFunction<any>,
	sharedThemeEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	useLegacyLists?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaListTypeOptionsKeySpecifier = ('advancedScoring' | 'advancedScoringEnabled' | 'customLists' | 'sectionOrder' | 'splitCompletedSectionByFormat' | 'theme' | MediaListTypeOptionsKeySpecifier)[];
export type MediaListTypeOptionsFieldPolicy = {
	advancedScoring?: FieldPolicy<any> | FieldReadFunction<any>,
	advancedScoringEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	customLists?: FieldPolicy<any> | FieldReadFunction<any>,
	sectionOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	splitCompletedSectionByFormat?: FieldPolicy<any> | FieldReadFunction<any>,
	theme?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaMergeNotificationKeySpecifier = ('context' | 'createdAt' | 'deletedMediaTitles' | 'id' | 'media' | 'mediaId' | 'reason' | 'type' | MediaMergeNotificationKeySpecifier)[];
export type MediaMergeNotificationFieldPolicy = {
	context?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	deletedMediaTitles?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaId?: FieldPolicy<any> | FieldReadFunction<any>,
	reason?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaRankKeySpecifier = ('allTime' | 'context' | 'format' | 'id' | 'rank' | 'season' | 'type' | 'year' | MediaRankKeySpecifier)[];
export type MediaRankFieldPolicy = {
	allTime?: FieldPolicy<any> | FieldReadFunction<any>,
	context?: FieldPolicy<any> | FieldReadFunction<any>,
	format?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	rank?: FieldPolicy<any> | FieldReadFunction<any>,
	season?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	year?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaStatsKeySpecifier = ('airingProgression' | 'scoreDistribution' | 'statusDistribution' | MediaStatsKeySpecifier)[];
export type MediaStatsFieldPolicy = {
	airingProgression?: FieldPolicy<any> | FieldReadFunction<any>,
	scoreDistribution?: FieldPolicy<any> | FieldReadFunction<any>,
	statusDistribution?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaStreamingEpisodeKeySpecifier = ('site' | 'thumbnail' | 'title' | 'url' | MediaStreamingEpisodeKeySpecifier)[];
export type MediaStreamingEpisodeFieldPolicy = {
	site?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnail?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaSubmissionKeySpecifier = ('assignee' | 'changes' | 'characters' | 'createdAt' | 'externalLinks' | 'id' | 'locked' | 'media' | 'notes' | 'relations' | 'source' | 'staff' | 'status' | 'studios' | 'submission' | 'submitter' | 'submitterStats' | MediaSubmissionKeySpecifier)[];
export type MediaSubmissionFieldPolicy = {
	assignee?: FieldPolicy<any> | FieldReadFunction<any>,
	changes?: FieldPolicy<any> | FieldReadFunction<any>,
	characters?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	externalLinks?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	locked?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	notes?: FieldPolicy<any> | FieldReadFunction<any>,
	relations?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>,
	staff?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	studios?: FieldPolicy<any> | FieldReadFunction<any>,
	submission?: FieldPolicy<any> | FieldReadFunction<any>,
	submitter?: FieldPolicy<any> | FieldReadFunction<any>,
	submitterStats?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaSubmissionComparisonKeySpecifier = ('character' | 'externalLink' | 'staff' | 'studio' | 'submission' | MediaSubmissionComparisonKeySpecifier)[];
export type MediaSubmissionComparisonFieldPolicy = {
	character?: FieldPolicy<any> | FieldReadFunction<any>,
	externalLink?: FieldPolicy<any> | FieldReadFunction<any>,
	staff?: FieldPolicy<any> | FieldReadFunction<any>,
	studio?: FieldPolicy<any> | FieldReadFunction<any>,
	submission?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaSubmissionEdgeKeySpecifier = ('character' | 'characterName' | 'characterRole' | 'characterSubmission' | 'dubGroup' | 'externalLink' | 'id' | 'isMain' | 'media' | 'roleNotes' | 'staff' | 'staffRole' | 'staffSubmission' | 'studio' | 'voiceActor' | 'voiceActorSubmission' | MediaSubmissionEdgeKeySpecifier)[];
export type MediaSubmissionEdgeFieldPolicy = {
	character?: FieldPolicy<any> | FieldReadFunction<any>,
	characterName?: FieldPolicy<any> | FieldReadFunction<any>,
	characterRole?: FieldPolicy<any> | FieldReadFunction<any>,
	characterSubmission?: FieldPolicy<any> | FieldReadFunction<any>,
	dubGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	externalLink?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isMain?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	roleNotes?: FieldPolicy<any> | FieldReadFunction<any>,
	staff?: FieldPolicy<any> | FieldReadFunction<any>,
	staffRole?: FieldPolicy<any> | FieldReadFunction<any>,
	staffSubmission?: FieldPolicy<any> | FieldReadFunction<any>,
	studio?: FieldPolicy<any> | FieldReadFunction<any>,
	voiceActor?: FieldPolicy<any> | FieldReadFunction<any>,
	voiceActorSubmission?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaTagKeySpecifier = ('category' | 'description' | 'id' | 'isAdult' | 'isGeneralSpoiler' | 'isMediaSpoiler' | 'name' | 'rank' | 'userId' | MediaTagKeySpecifier)[];
export type MediaTagFieldPolicy = {
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isAdult?: FieldPolicy<any> | FieldReadFunction<any>,
	isGeneralSpoiler?: FieldPolicy<any> | FieldReadFunction<any>,
	isMediaSpoiler?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	rank?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaTitleKeySpecifier = ('english' | 'native' | 'romaji' | 'userPreferred' | MediaTitleKeySpecifier)[];
export type MediaTitleFieldPolicy = {
	english?: FieldPolicy<any> | FieldReadFunction<any>,
	native?: FieldPolicy<any> | FieldReadFunction<any>,
	romaji?: FieldPolicy<any> | FieldReadFunction<any>,
	userPreferred?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaTrailerKeySpecifier = ('id' | 'site' | 'thumbnail' | MediaTrailerKeySpecifier)[];
export type MediaTrailerFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	site?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnail?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaTrendKeySpecifier = ('averageScore' | 'date' | 'episode' | 'inProgress' | 'media' | 'mediaId' | 'popularity' | 'releasing' | 'trending' | MediaTrendKeySpecifier)[];
export type MediaTrendFieldPolicy = {
	averageScore?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	episode?: FieldPolicy<any> | FieldReadFunction<any>,
	inProgress?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaId?: FieldPolicy<any> | FieldReadFunction<any>,
	popularity?: FieldPolicy<any> | FieldReadFunction<any>,
	releasing?: FieldPolicy<any> | FieldReadFunction<any>,
	trending?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaTrendConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | MediaTrendConnectionKeySpecifier)[];
export type MediaTrendConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaTrendEdgeKeySpecifier = ('node' | MediaTrendEdgeKeySpecifier)[];
export type MediaTrendEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MessageActivityKeySpecifier = ('createdAt' | 'id' | 'isLiked' | 'isLocked' | 'isPrivate' | 'isSubscribed' | 'likeCount' | 'likes' | 'message' | 'messenger' | 'messengerId' | 'recipient' | 'recipientId' | 'replies' | 'replyCount' | 'siteUrl' | 'type' | MessageActivityKeySpecifier)[];
export type MessageActivityFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isLiked?: FieldPolicy<any> | FieldReadFunction<any>,
	isLocked?: FieldPolicy<any> | FieldReadFunction<any>,
	isPrivate?: FieldPolicy<any> | FieldReadFunction<any>,
	isSubscribed?: FieldPolicy<any> | FieldReadFunction<any>,
	likeCount?: FieldPolicy<any> | FieldReadFunction<any>,
	likes?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	messenger?: FieldPolicy<any> | FieldReadFunction<any>,
	messengerId?: FieldPolicy<any> | FieldReadFunction<any>,
	recipient?: FieldPolicy<any> | FieldReadFunction<any>,
	recipientId?: FieldPolicy<any> | FieldReadFunction<any>,
	replies?: FieldPolicy<any> | FieldReadFunction<any>,
	replyCount?: FieldPolicy<any> | FieldReadFunction<any>,
	siteUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ModActionKeySpecifier = ('createdAt' | 'data' | 'id' | 'mod' | 'objectId' | 'objectType' | 'type' | 'user' | ModActionKeySpecifier)[];
export type ModActionFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	mod?: FieldPolicy<any> | FieldReadFunction<any>,
	objectId?: FieldPolicy<any> | FieldReadFunction<any>,
	objectType?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('DeleteActivity' | 'DeleteActivityReply' | 'DeleteCustomList' | 'DeleteMediaListEntry' | 'DeleteReview' | 'DeleteThread' | 'DeleteThreadComment' | 'RateReview' | 'SaveActivityReply' | 'SaveListActivity' | 'SaveMediaListEntry' | 'SaveMessageActivity' | 'SaveRecommendation' | 'SaveReview' | 'SaveTextActivity' | 'SaveThread' | 'SaveThreadComment' | 'ToggleActivityPin' | 'ToggleActivitySubscription' | 'ToggleFavourite' | 'ToggleFollow' | 'ToggleLike' | 'ToggleLikeV2' | 'ToggleThreadSubscription' | 'UpdateAniChartHighlights' | 'UpdateAniChartSettings' | 'UpdateFavouriteOrder' | 'UpdateMediaListEntries' | 'UpdateUser' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	DeleteActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	DeleteActivityReply?: FieldPolicy<any> | FieldReadFunction<any>,
	DeleteCustomList?: FieldPolicy<any> | FieldReadFunction<any>,
	DeleteMediaListEntry?: FieldPolicy<any> | FieldReadFunction<any>,
	DeleteReview?: FieldPolicy<any> | FieldReadFunction<any>,
	DeleteThread?: FieldPolicy<any> | FieldReadFunction<any>,
	DeleteThreadComment?: FieldPolicy<any> | FieldReadFunction<any>,
	RateReview?: FieldPolicy<any> | FieldReadFunction<any>,
	SaveActivityReply?: FieldPolicy<any> | FieldReadFunction<any>,
	SaveListActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	SaveMediaListEntry?: FieldPolicy<any> | FieldReadFunction<any>,
	SaveMessageActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	SaveRecommendation?: FieldPolicy<any> | FieldReadFunction<any>,
	SaveReview?: FieldPolicy<any> | FieldReadFunction<any>,
	SaveTextActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	SaveThread?: FieldPolicy<any> | FieldReadFunction<any>,
	SaveThreadComment?: FieldPolicy<any> | FieldReadFunction<any>,
	ToggleActivityPin?: FieldPolicy<any> | FieldReadFunction<any>,
	ToggleActivitySubscription?: FieldPolicy<any> | FieldReadFunction<any>,
	ToggleFavourite?: FieldPolicy<any> | FieldReadFunction<any>,
	ToggleFollow?: FieldPolicy<any> | FieldReadFunction<any>,
	ToggleLike?: FieldPolicy<any> | FieldReadFunction<any>,
	ToggleLikeV2?: FieldPolicy<any> | FieldReadFunction<any>,
	ToggleThreadSubscription?: FieldPolicy<any> | FieldReadFunction<any>,
	UpdateAniChartHighlights?: FieldPolicy<any> | FieldReadFunction<any>,
	UpdateAniChartSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	UpdateFavouriteOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	UpdateMediaListEntries?: FieldPolicy<any> | FieldReadFunction<any>,
	UpdateUser?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NotificationOptionKeySpecifier = ('enabled' | 'type' | NotificationOptionKeySpecifier)[];
export type NotificationOptionFieldPolicy = {
	enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageKeySpecifier = ('activities' | 'activityReplies' | 'airingSchedules' | 'characters' | 'followers' | 'following' | 'likes' | 'media' | 'mediaList' | 'mediaTrends' | 'notifications' | 'pageInfo' | 'recommendations' | 'reviews' | 'staff' | 'studios' | 'threadComments' | 'threads' | 'users' | PageKeySpecifier)[];
export type PageFieldPolicy = {
	activities?: FieldPolicy<any> | FieldReadFunction<any>,
	activityReplies?: FieldPolicy<any> | FieldReadFunction<any>,
	airingSchedules?: FieldPolicy<any> | FieldReadFunction<any>,
	characters?: FieldPolicy<any> | FieldReadFunction<any>,
	followers?: FieldPolicy<any> | FieldReadFunction<any>,
	following?: FieldPolicy<any> | FieldReadFunction<any>,
	likes?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaList?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaTrends?: FieldPolicy<any> | FieldReadFunction<any>,
	notifications?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	recommendations?: FieldPolicy<any> | FieldReadFunction<any>,
	reviews?: FieldPolicy<any> | FieldReadFunction<any>,
	staff?: FieldPolicy<any> | FieldReadFunction<any>,
	studios?: FieldPolicy<any> | FieldReadFunction<any>,
	threadComments?: FieldPolicy<any> | FieldReadFunction<any>,
	threads?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('currentPage' | 'hasNextPage' | 'lastPage' | 'perPage' | 'total' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	currentPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	lastPage?: FieldPolicy<any> | FieldReadFunction<any>,
	perPage?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ParsedMarkdownKeySpecifier = ('html' | ParsedMarkdownKeySpecifier)[];
export type ParsedMarkdownFieldPolicy = {
	html?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('Activity' | 'ActivityReply' | 'AiringSchedule' | 'AniChartUser' | 'Character' | 'ExternalLinkSourceCollection' | 'Follower' | 'Following' | 'GenreCollection' | 'Like' | 'Markdown' | 'Media' | 'MediaList' | 'MediaListCollection' | 'MediaTagCollection' | 'MediaTrend' | 'Notification' | 'Page' | 'Recommendation' | 'Review' | 'SiteStatistics' | 'Staff' | 'Studio' | 'Thread' | 'ThreadComment' | 'User' | 'Viewer' | 'continent' | 'continents' | 'countries' | 'country' | 'language' | 'languages' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	Activity?: FieldPolicy<any> | FieldReadFunction<any>,
	ActivityReply?: FieldPolicy<any> | FieldReadFunction<any>,
	AiringSchedule?: FieldPolicy<any> | FieldReadFunction<any>,
	AniChartUser?: FieldPolicy<any> | FieldReadFunction<any>,
	Character?: FieldPolicy<any> | FieldReadFunction<any>,
	ExternalLinkSourceCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	Follower?: FieldPolicy<any> | FieldReadFunction<any>,
	Following?: FieldPolicy<any> | FieldReadFunction<any>,
	GenreCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	Like?: FieldPolicy<any> | FieldReadFunction<any>,
	Markdown?: FieldPolicy<any> | FieldReadFunction<any>,
	Media?: FieldPolicy<any> | FieldReadFunction<any>,
	MediaList?: FieldPolicy<any> | FieldReadFunction<any>,
	MediaListCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	MediaTagCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	MediaTrend?: FieldPolicy<any> | FieldReadFunction<any>,
	Notification?: FieldPolicy<any> | FieldReadFunction<any>,
	Page?: FieldPolicy<any> | FieldReadFunction<any>,
	Recommendation?: FieldPolicy<any> | FieldReadFunction<any>,
	Review?: FieldPolicy<any> | FieldReadFunction<any>,
	SiteStatistics?: FieldPolicy<any> | FieldReadFunction<any>,
	Staff?: FieldPolicy<any> | FieldReadFunction<any>,
	Studio?: FieldPolicy<any> | FieldReadFunction<any>,
	Thread?: FieldPolicy<any> | FieldReadFunction<any>,
	ThreadComment?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	Viewer?: FieldPolicy<any> | FieldReadFunction<any>,
	continent?: FieldPolicy<any> | FieldReadFunction<any>,
	continents?: FieldPolicy<any> | FieldReadFunction<any>,
	countries?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	languages?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RecommendationKeySpecifier = ('id' | 'media' | 'mediaRecommendation' | 'rating' | 'user' | 'userRating' | RecommendationKeySpecifier)[];
export type RecommendationFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaRecommendation?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userRating?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RecommendationConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | RecommendationConnectionKeySpecifier)[];
export type RecommendationConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RecommendationEdgeKeySpecifier = ('node' | RecommendationEdgeKeySpecifier)[];
export type RecommendationEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RelatedMediaAdditionNotificationKeySpecifier = ('context' | 'createdAt' | 'id' | 'media' | 'mediaId' | 'type' | RelatedMediaAdditionNotificationKeySpecifier)[];
export type RelatedMediaAdditionNotificationFieldPolicy = {
	context?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaId?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReportKeySpecifier = ('cleared' | 'createdAt' | 'id' | 'reason' | 'reported' | 'reporter' | ReportKeySpecifier)[];
export type ReportFieldPolicy = {
	cleared?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	reason?: FieldPolicy<any> | FieldReadFunction<any>,
	reported?: FieldPolicy<any> | FieldReadFunction<any>,
	reporter?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReviewKeySpecifier = ('body' | 'createdAt' | 'id' | 'media' | 'mediaId' | 'mediaType' | 'private' | 'rating' | 'ratingAmount' | 'score' | 'siteUrl' | 'summary' | 'updatedAt' | 'user' | 'userId' | 'userRating' | ReviewKeySpecifier)[];
export type ReviewFieldPolicy = {
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaId?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaType?: FieldPolicy<any> | FieldReadFunction<any>,
	private?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	ratingAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	score?: FieldPolicy<any> | FieldReadFunction<any>,
	siteUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	summary?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>,
	userRating?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReviewConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | ReviewConnectionKeySpecifier)[];
export type ReviewConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReviewEdgeKeySpecifier = ('node' | ReviewEdgeKeySpecifier)[];
export type ReviewEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RevisionHistoryKeySpecifier = ('action' | 'changes' | 'character' | 'createdAt' | 'externalLink' | 'id' | 'media' | 'staff' | 'studio' | 'user' | RevisionHistoryKeySpecifier)[];
export type RevisionHistoryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	changes?: FieldPolicy<any> | FieldReadFunction<any>,
	character?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	externalLink?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	staff?: FieldPolicy<any> | FieldReadFunction<any>,
	studio?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ScoreDistributionKeySpecifier = ('amount' | 'score' | ScoreDistributionKeySpecifier)[];
export type ScoreDistributionFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	score?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SiteStatisticsKeySpecifier = ('anime' | 'characters' | 'manga' | 'reviews' | 'staff' | 'studios' | 'users' | SiteStatisticsKeySpecifier)[];
export type SiteStatisticsFieldPolicy = {
	anime?: FieldPolicy<any> | FieldReadFunction<any>,
	characters?: FieldPolicy<any> | FieldReadFunction<any>,
	manga?: FieldPolicy<any> | FieldReadFunction<any>,
	reviews?: FieldPolicy<any> | FieldReadFunction<any>,
	staff?: FieldPolicy<any> | FieldReadFunction<any>,
	studios?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SiteTrendKeySpecifier = ('change' | 'count' | 'date' | SiteTrendKeySpecifier)[];
export type SiteTrendFieldPolicy = {
	change?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SiteTrendConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | SiteTrendConnectionKeySpecifier)[];
export type SiteTrendConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SiteTrendEdgeKeySpecifier = ('node' | SiteTrendEdgeKeySpecifier)[];
export type SiteTrendEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StaffKeySpecifier = ('age' | 'bloodType' | 'characterMedia' | 'characters' | 'dateOfBirth' | 'dateOfDeath' | 'description' | 'favourites' | 'gender' | 'homeTown' | 'id' | 'image' | 'isFavourite' | 'isFavouriteBlocked' | 'language' | 'languageV2' | 'modNotes' | 'name' | 'primaryOccupations' | 'siteUrl' | 'staff' | 'staffMedia' | 'submissionNotes' | 'submissionStatus' | 'submitter' | 'updatedAt' | 'yearsActive' | StaffKeySpecifier)[];
export type StaffFieldPolicy = {
	age?: FieldPolicy<any> | FieldReadFunction<any>,
	bloodType?: FieldPolicy<any> | FieldReadFunction<any>,
	characterMedia?: FieldPolicy<any> | FieldReadFunction<any>,
	characters?: FieldPolicy<any> | FieldReadFunction<any>,
	dateOfBirth?: FieldPolicy<any> | FieldReadFunction<any>,
	dateOfDeath?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	favourites?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	homeTown?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	isFavourite?: FieldPolicy<any> | FieldReadFunction<any>,
	isFavouriteBlocked?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	languageV2?: FieldPolicy<any> | FieldReadFunction<any>,
	modNotes?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	primaryOccupations?: FieldPolicy<any> | FieldReadFunction<any>,
	siteUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	staff?: FieldPolicy<any> | FieldReadFunction<any>,
	staffMedia?: FieldPolicy<any> | FieldReadFunction<any>,
	submissionNotes?: FieldPolicy<any> | FieldReadFunction<any>,
	submissionStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	submitter?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	yearsActive?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StaffConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | StaffConnectionKeySpecifier)[];
export type StaffConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StaffEdgeKeySpecifier = ('favouriteOrder' | 'id' | 'node' | 'role' | StaffEdgeKeySpecifier)[];
export type StaffEdgeFieldPolicy = {
	favouriteOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StaffImageKeySpecifier = ('large' | 'medium' | StaffImageKeySpecifier)[];
export type StaffImageFieldPolicy = {
	large?: FieldPolicy<any> | FieldReadFunction<any>,
	medium?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StaffNameKeySpecifier = ('alternative' | 'first' | 'full' | 'last' | 'middle' | 'native' | 'userPreferred' | StaffNameKeySpecifier)[];
export type StaffNameFieldPolicy = {
	alternative?: FieldPolicy<any> | FieldReadFunction<any>,
	first?: FieldPolicy<any> | FieldReadFunction<any>,
	full?: FieldPolicy<any> | FieldReadFunction<any>,
	last?: FieldPolicy<any> | FieldReadFunction<any>,
	middle?: FieldPolicy<any> | FieldReadFunction<any>,
	native?: FieldPolicy<any> | FieldReadFunction<any>,
	userPreferred?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StaffRoleTypeKeySpecifier = ('dubGroup' | 'roleNotes' | 'voiceActor' | StaffRoleTypeKeySpecifier)[];
export type StaffRoleTypeFieldPolicy = {
	dubGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	roleNotes?: FieldPolicy<any> | FieldReadFunction<any>,
	voiceActor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StaffStatsKeySpecifier = ('amount' | 'meanScore' | 'staff' | 'timeWatched' | StaffStatsKeySpecifier)[];
export type StaffStatsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	meanScore?: FieldPolicy<any> | FieldReadFunction<any>,
	staff?: FieldPolicy<any> | FieldReadFunction<any>,
	timeWatched?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StaffSubmissionKeySpecifier = ('assignee' | 'createdAt' | 'id' | 'locked' | 'notes' | 'source' | 'staff' | 'status' | 'submission' | 'submitter' | StaffSubmissionKeySpecifier)[];
export type StaffSubmissionFieldPolicy = {
	assignee?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	locked?: FieldPolicy<any> | FieldReadFunction<any>,
	notes?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>,
	staff?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	submission?: FieldPolicy<any> | FieldReadFunction<any>,
	submitter?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StateKeySpecifier = ('code' | 'country' | 'name' | StateKeySpecifier)[];
export type StateFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StatusDistributionKeySpecifier = ('amount' | 'status' | StatusDistributionKeySpecifier)[];
export type StatusDistributionFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StudioKeySpecifier = ('favourites' | 'id' | 'isAnimationStudio' | 'isFavourite' | 'media' | 'name' | 'siteUrl' | StudioKeySpecifier)[];
export type StudioFieldPolicy = {
	favourites?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isAnimationStudio?: FieldPolicy<any> | FieldReadFunction<any>,
	isFavourite?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	siteUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StudioConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | StudioConnectionKeySpecifier)[];
export type StudioConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StudioEdgeKeySpecifier = ('favouriteOrder' | 'id' | 'isMain' | 'node' | StudioEdgeKeySpecifier)[];
export type StudioEdgeFieldPolicy = {
	favouriteOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isMain?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StudioStatsKeySpecifier = ('amount' | 'meanScore' | 'studio' | 'timeWatched' | StudioStatsKeySpecifier)[];
export type StudioStatsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	meanScore?: FieldPolicy<any> | FieldReadFunction<any>,
	studio?: FieldPolicy<any> | FieldReadFunction<any>,
	timeWatched?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubdivisionKeySpecifier = ('code' | 'emoji' | 'name' | SubdivisionKeySpecifier)[];
export type SubdivisionFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	emoji?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagStatsKeySpecifier = ('amount' | 'meanScore' | 'tag' | 'timeWatched' | TagStatsKeySpecifier)[];
export type TagStatsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	meanScore?: FieldPolicy<any> | FieldReadFunction<any>,
	tag?: FieldPolicy<any> | FieldReadFunction<any>,
	timeWatched?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TextActivityKeySpecifier = ('createdAt' | 'id' | 'isLiked' | 'isLocked' | 'isPinned' | 'isSubscribed' | 'likeCount' | 'likes' | 'replies' | 'replyCount' | 'siteUrl' | 'text' | 'type' | 'user' | 'userId' | TextActivityKeySpecifier)[];
export type TextActivityFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isLiked?: FieldPolicy<any> | FieldReadFunction<any>,
	isLocked?: FieldPolicy<any> | FieldReadFunction<any>,
	isPinned?: FieldPolicy<any> | FieldReadFunction<any>,
	isSubscribed?: FieldPolicy<any> | FieldReadFunction<any>,
	likeCount?: FieldPolicy<any> | FieldReadFunction<any>,
	likes?: FieldPolicy<any> | FieldReadFunction<any>,
	replies?: FieldPolicy<any> | FieldReadFunction<any>,
	replyCount?: FieldPolicy<any> | FieldReadFunction<any>,
	siteUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ThreadKeySpecifier = ('body' | 'categories' | 'createdAt' | 'id' | 'isLiked' | 'isLocked' | 'isSticky' | 'isSubscribed' | 'likeCount' | 'likes' | 'mediaCategories' | 'repliedAt' | 'replyCommentId' | 'replyCount' | 'replyUser' | 'replyUserId' | 'siteUrl' | 'title' | 'updatedAt' | 'user' | 'userId' | 'viewCount' | ThreadKeySpecifier)[];
export type ThreadFieldPolicy = {
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isLiked?: FieldPolicy<any> | FieldReadFunction<any>,
	isLocked?: FieldPolicy<any> | FieldReadFunction<any>,
	isSticky?: FieldPolicy<any> | FieldReadFunction<any>,
	isSubscribed?: FieldPolicy<any> | FieldReadFunction<any>,
	likeCount?: FieldPolicy<any> | FieldReadFunction<any>,
	likes?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaCategories?: FieldPolicy<any> | FieldReadFunction<any>,
	repliedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	replyCommentId?: FieldPolicy<any> | FieldReadFunction<any>,
	replyCount?: FieldPolicy<any> | FieldReadFunction<any>,
	replyUser?: FieldPolicy<any> | FieldReadFunction<any>,
	replyUserId?: FieldPolicy<any> | FieldReadFunction<any>,
	siteUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>,
	viewCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ThreadCategoryKeySpecifier = ('id' | 'name' | ThreadCategoryKeySpecifier)[];
export type ThreadCategoryFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ThreadCommentKeySpecifier = ('childComments' | 'comment' | 'createdAt' | 'id' | 'isLiked' | 'isLocked' | 'likeCount' | 'likes' | 'siteUrl' | 'thread' | 'threadId' | 'updatedAt' | 'user' | 'userId' | ThreadCommentKeySpecifier)[];
export type ThreadCommentFieldPolicy = {
	childComments?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isLiked?: FieldPolicy<any> | FieldReadFunction<any>,
	isLocked?: FieldPolicy<any> | FieldReadFunction<any>,
	likeCount?: FieldPolicy<any> | FieldReadFunction<any>,
	likes?: FieldPolicy<any> | FieldReadFunction<any>,
	siteUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	thread?: FieldPolicy<any> | FieldReadFunction<any>,
	threadId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ThreadCommentLikeNotificationKeySpecifier = ('comment' | 'commentId' | 'context' | 'createdAt' | 'id' | 'thread' | 'type' | 'user' | 'userId' | ThreadCommentLikeNotificationKeySpecifier)[];
export type ThreadCommentLikeNotificationFieldPolicy = {
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	commentId?: FieldPolicy<any> | FieldReadFunction<any>,
	context?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	thread?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ThreadCommentMentionNotificationKeySpecifier = ('comment' | 'commentId' | 'context' | 'createdAt' | 'id' | 'thread' | 'type' | 'user' | 'userId' | ThreadCommentMentionNotificationKeySpecifier)[];
export type ThreadCommentMentionNotificationFieldPolicy = {
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	commentId?: FieldPolicy<any> | FieldReadFunction<any>,
	context?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	thread?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ThreadCommentReplyNotificationKeySpecifier = ('comment' | 'commentId' | 'context' | 'createdAt' | 'id' | 'thread' | 'type' | 'user' | 'userId' | ThreadCommentReplyNotificationKeySpecifier)[];
export type ThreadCommentReplyNotificationFieldPolicy = {
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	commentId?: FieldPolicy<any> | FieldReadFunction<any>,
	context?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	thread?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ThreadCommentSubscribedNotificationKeySpecifier = ('comment' | 'commentId' | 'context' | 'createdAt' | 'id' | 'thread' | 'type' | 'user' | 'userId' | ThreadCommentSubscribedNotificationKeySpecifier)[];
export type ThreadCommentSubscribedNotificationFieldPolicy = {
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	commentId?: FieldPolicy<any> | FieldReadFunction<any>,
	context?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	thread?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ThreadLikeNotificationKeySpecifier = ('comment' | 'context' | 'createdAt' | 'id' | 'thread' | 'threadId' | 'type' | 'user' | 'userId' | ThreadLikeNotificationKeySpecifier)[];
export type ThreadLikeNotificationFieldPolicy = {
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	context?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	thread?: FieldPolicy<any> | FieldReadFunction<any>,
	threadId?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('about' | 'avatar' | 'bannerImage' | 'bans' | 'createdAt' | 'donatorBadge' | 'donatorTier' | 'favourites' | 'id' | 'isBlocked' | 'isFollower' | 'isFollowing' | 'mediaListOptions' | 'moderatorRoles' | 'moderatorStatus' | 'name' | 'options' | 'previousNames' | 'siteUrl' | 'statistics' | 'stats' | 'unreadNotificationCount' | 'updatedAt' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	about?: FieldPolicy<any> | FieldReadFunction<any>,
	avatar?: FieldPolicy<any> | FieldReadFunction<any>,
	bannerImage?: FieldPolicy<any> | FieldReadFunction<any>,
	bans?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	donatorBadge?: FieldPolicy<any> | FieldReadFunction<any>,
	donatorTier?: FieldPolicy<any> | FieldReadFunction<any>,
	favourites?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isBlocked?: FieldPolicy<any> | FieldReadFunction<any>,
	isFollower?: FieldPolicy<any> | FieldReadFunction<any>,
	isFollowing?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaListOptions?: FieldPolicy<any> | FieldReadFunction<any>,
	moderatorRoles?: FieldPolicy<any> | FieldReadFunction<any>,
	moderatorStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	options?: FieldPolicy<any> | FieldReadFunction<any>,
	previousNames?: FieldPolicy<any> | FieldReadFunction<any>,
	siteUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	statistics?: FieldPolicy<any> | FieldReadFunction<any>,
	stats?: FieldPolicy<any> | FieldReadFunction<any>,
	unreadNotificationCount?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserActivityHistoryKeySpecifier = ('amount' | 'date' | 'level' | UserActivityHistoryKeySpecifier)[];
export type UserActivityHistoryFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	level?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserAvatarKeySpecifier = ('large' | 'medium' | UserAvatarKeySpecifier)[];
export type UserAvatarFieldPolicy = {
	large?: FieldPolicy<any> | FieldReadFunction<any>,
	medium?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserCountryStatisticKeySpecifier = ('chaptersRead' | 'count' | 'country' | 'meanScore' | 'mediaIds' | 'minutesWatched' | UserCountryStatisticKeySpecifier)[];
export type UserCountryStatisticFieldPolicy = {
	chaptersRead?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	meanScore?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaIds?: FieldPolicy<any> | FieldReadFunction<any>,
	minutesWatched?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserFormatStatisticKeySpecifier = ('chaptersRead' | 'count' | 'format' | 'meanScore' | 'mediaIds' | 'minutesWatched' | UserFormatStatisticKeySpecifier)[];
export type UserFormatStatisticFieldPolicy = {
	chaptersRead?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	format?: FieldPolicy<any> | FieldReadFunction<any>,
	meanScore?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaIds?: FieldPolicy<any> | FieldReadFunction<any>,
	minutesWatched?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserGenreStatisticKeySpecifier = ('chaptersRead' | 'count' | 'genre' | 'meanScore' | 'mediaIds' | 'minutesWatched' | UserGenreStatisticKeySpecifier)[];
export type UserGenreStatisticFieldPolicy = {
	chaptersRead?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	genre?: FieldPolicy<any> | FieldReadFunction<any>,
	meanScore?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaIds?: FieldPolicy<any> | FieldReadFunction<any>,
	minutesWatched?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserLengthStatisticKeySpecifier = ('chaptersRead' | 'count' | 'length' | 'meanScore' | 'mediaIds' | 'minutesWatched' | UserLengthStatisticKeySpecifier)[];
export type UserLengthStatisticFieldPolicy = {
	chaptersRead?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	length?: FieldPolicy<any> | FieldReadFunction<any>,
	meanScore?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaIds?: FieldPolicy<any> | FieldReadFunction<any>,
	minutesWatched?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserModDataKeySpecifier = ('alts' | 'bans' | 'counts' | 'email' | 'ip' | 'privacy' | UserModDataKeySpecifier)[];
export type UserModDataFieldPolicy = {
	alts?: FieldPolicy<any> | FieldReadFunction<any>,
	bans?: FieldPolicy<any> | FieldReadFunction<any>,
	counts?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	ip?: FieldPolicy<any> | FieldReadFunction<any>,
	privacy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserOptionsKeySpecifier = ('activityMergeTime' | 'airingNotifications' | 'disabledListActivity' | 'displayAdultContent' | 'notificationOptions' | 'profileColor' | 'restrictMessagesToFollowing' | 'staffNameLanguage' | 'timezone' | 'titleLanguage' | UserOptionsKeySpecifier)[];
export type UserOptionsFieldPolicy = {
	activityMergeTime?: FieldPolicy<any> | FieldReadFunction<any>,
	airingNotifications?: FieldPolicy<any> | FieldReadFunction<any>,
	disabledListActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	displayAdultContent?: FieldPolicy<any> | FieldReadFunction<any>,
	notificationOptions?: FieldPolicy<any> | FieldReadFunction<any>,
	profileColor?: FieldPolicy<any> | FieldReadFunction<any>,
	restrictMessagesToFollowing?: FieldPolicy<any> | FieldReadFunction<any>,
	staffNameLanguage?: FieldPolicy<any> | FieldReadFunction<any>,
	timezone?: FieldPolicy<any> | FieldReadFunction<any>,
	titleLanguage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserPreviousNameKeySpecifier = ('createdAt' | 'name' | 'updatedAt' | UserPreviousNameKeySpecifier)[];
export type UserPreviousNameFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserReleaseYearStatisticKeySpecifier = ('chaptersRead' | 'count' | 'meanScore' | 'mediaIds' | 'minutesWatched' | 'releaseYear' | UserReleaseYearStatisticKeySpecifier)[];
export type UserReleaseYearStatisticFieldPolicy = {
	chaptersRead?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	meanScore?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaIds?: FieldPolicy<any> | FieldReadFunction<any>,
	minutesWatched?: FieldPolicy<any> | FieldReadFunction<any>,
	releaseYear?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserScoreStatisticKeySpecifier = ('chaptersRead' | 'count' | 'meanScore' | 'mediaIds' | 'minutesWatched' | 'score' | UserScoreStatisticKeySpecifier)[];
export type UserScoreStatisticFieldPolicy = {
	chaptersRead?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	meanScore?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaIds?: FieldPolicy<any> | FieldReadFunction<any>,
	minutesWatched?: FieldPolicy<any> | FieldReadFunction<any>,
	score?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserStaffStatisticKeySpecifier = ('chaptersRead' | 'count' | 'meanScore' | 'mediaIds' | 'minutesWatched' | 'staff' | UserStaffStatisticKeySpecifier)[];
export type UserStaffStatisticFieldPolicy = {
	chaptersRead?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	meanScore?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaIds?: FieldPolicy<any> | FieldReadFunction<any>,
	minutesWatched?: FieldPolicy<any> | FieldReadFunction<any>,
	staff?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserStartYearStatisticKeySpecifier = ('chaptersRead' | 'count' | 'meanScore' | 'mediaIds' | 'minutesWatched' | 'startYear' | UserStartYearStatisticKeySpecifier)[];
export type UserStartYearStatisticFieldPolicy = {
	chaptersRead?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	meanScore?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaIds?: FieldPolicy<any> | FieldReadFunction<any>,
	minutesWatched?: FieldPolicy<any> | FieldReadFunction<any>,
	startYear?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserStatisticTypesKeySpecifier = ('anime' | 'manga' | UserStatisticTypesKeySpecifier)[];
export type UserStatisticTypesFieldPolicy = {
	anime?: FieldPolicy<any> | FieldReadFunction<any>,
	manga?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserStatisticsKeySpecifier = ('chaptersRead' | 'count' | 'countries' | 'episodesWatched' | 'formats' | 'genres' | 'lengths' | 'meanScore' | 'minutesWatched' | 'releaseYears' | 'scores' | 'staff' | 'standardDeviation' | 'startYears' | 'statuses' | 'studios' | 'tags' | 'voiceActors' | 'volumesRead' | UserStatisticsKeySpecifier)[];
export type UserStatisticsFieldPolicy = {
	chaptersRead?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	countries?: FieldPolicy<any> | FieldReadFunction<any>,
	episodesWatched?: FieldPolicy<any> | FieldReadFunction<any>,
	formats?: FieldPolicy<any> | FieldReadFunction<any>,
	genres?: FieldPolicy<any> | FieldReadFunction<any>,
	lengths?: FieldPolicy<any> | FieldReadFunction<any>,
	meanScore?: FieldPolicy<any> | FieldReadFunction<any>,
	minutesWatched?: FieldPolicy<any> | FieldReadFunction<any>,
	releaseYears?: FieldPolicy<any> | FieldReadFunction<any>,
	scores?: FieldPolicy<any> | FieldReadFunction<any>,
	staff?: FieldPolicy<any> | FieldReadFunction<any>,
	standardDeviation?: FieldPolicy<any> | FieldReadFunction<any>,
	startYears?: FieldPolicy<any> | FieldReadFunction<any>,
	statuses?: FieldPolicy<any> | FieldReadFunction<any>,
	studios?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	voiceActors?: FieldPolicy<any> | FieldReadFunction<any>,
	volumesRead?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserStatsKeySpecifier = ('activityHistory' | 'animeListScores' | 'animeScoreDistribution' | 'animeStatusDistribution' | 'chaptersRead' | 'favouredActors' | 'favouredFormats' | 'favouredGenres' | 'favouredGenresOverview' | 'favouredStaff' | 'favouredStudios' | 'favouredTags' | 'favouredYears' | 'mangaListScores' | 'mangaScoreDistribution' | 'mangaStatusDistribution' | 'watchedTime' | UserStatsKeySpecifier)[];
export type UserStatsFieldPolicy = {
	activityHistory?: FieldPolicy<any> | FieldReadFunction<any>,
	animeListScores?: FieldPolicy<any> | FieldReadFunction<any>,
	animeScoreDistribution?: FieldPolicy<any> | FieldReadFunction<any>,
	animeStatusDistribution?: FieldPolicy<any> | FieldReadFunction<any>,
	chaptersRead?: FieldPolicy<any> | FieldReadFunction<any>,
	favouredActors?: FieldPolicy<any> | FieldReadFunction<any>,
	favouredFormats?: FieldPolicy<any> | FieldReadFunction<any>,
	favouredGenres?: FieldPolicy<any> | FieldReadFunction<any>,
	favouredGenresOverview?: FieldPolicy<any> | FieldReadFunction<any>,
	favouredStaff?: FieldPolicy<any> | FieldReadFunction<any>,
	favouredStudios?: FieldPolicy<any> | FieldReadFunction<any>,
	favouredTags?: FieldPolicy<any> | FieldReadFunction<any>,
	favouredYears?: FieldPolicy<any> | FieldReadFunction<any>,
	mangaListScores?: FieldPolicy<any> | FieldReadFunction<any>,
	mangaScoreDistribution?: FieldPolicy<any> | FieldReadFunction<any>,
	mangaStatusDistribution?: FieldPolicy<any> | FieldReadFunction<any>,
	watchedTime?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserStatusStatisticKeySpecifier = ('chaptersRead' | 'count' | 'meanScore' | 'mediaIds' | 'minutesWatched' | 'status' | UserStatusStatisticKeySpecifier)[];
export type UserStatusStatisticFieldPolicy = {
	chaptersRead?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	meanScore?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaIds?: FieldPolicy<any> | FieldReadFunction<any>,
	minutesWatched?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserStudioStatisticKeySpecifier = ('chaptersRead' | 'count' | 'meanScore' | 'mediaIds' | 'minutesWatched' | 'studio' | UserStudioStatisticKeySpecifier)[];
export type UserStudioStatisticFieldPolicy = {
	chaptersRead?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	meanScore?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaIds?: FieldPolicy<any> | FieldReadFunction<any>,
	minutesWatched?: FieldPolicy<any> | FieldReadFunction<any>,
	studio?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserTagStatisticKeySpecifier = ('chaptersRead' | 'count' | 'meanScore' | 'mediaIds' | 'minutesWatched' | 'tag' | UserTagStatisticKeySpecifier)[];
export type UserTagStatisticFieldPolicy = {
	chaptersRead?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	meanScore?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaIds?: FieldPolicy<any> | FieldReadFunction<any>,
	minutesWatched?: FieldPolicy<any> | FieldReadFunction<any>,
	tag?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserVoiceActorStatisticKeySpecifier = ('chaptersRead' | 'characterIds' | 'count' | 'meanScore' | 'mediaIds' | 'minutesWatched' | 'voiceActor' | UserVoiceActorStatisticKeySpecifier)[];
export type UserVoiceActorStatisticFieldPolicy = {
	chaptersRead?: FieldPolicy<any> | FieldReadFunction<any>,
	characterIds?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	meanScore?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaIds?: FieldPolicy<any> | FieldReadFunction<any>,
	minutesWatched?: FieldPolicy<any> | FieldReadFunction<any>,
	voiceActor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type YearStatsKeySpecifier = ('amount' | 'meanScore' | 'year' | YearStatsKeySpecifier)[];
export type YearStatsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	meanScore?: FieldPolicy<any> | FieldReadFunction<any>,
	year?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	ActivityLikeNotification?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActivityLikeNotificationKeySpecifier | (() => undefined | ActivityLikeNotificationKeySpecifier),
		fields?: ActivityLikeNotificationFieldPolicy,
	},
	ActivityMentionNotification?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActivityMentionNotificationKeySpecifier | (() => undefined | ActivityMentionNotificationKeySpecifier),
		fields?: ActivityMentionNotificationFieldPolicy,
	},
	ActivityMessageNotification?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActivityMessageNotificationKeySpecifier | (() => undefined | ActivityMessageNotificationKeySpecifier),
		fields?: ActivityMessageNotificationFieldPolicy,
	},
	ActivityReply?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActivityReplyKeySpecifier | (() => undefined | ActivityReplyKeySpecifier),
		fields?: ActivityReplyFieldPolicy,
	},
	ActivityReplyLikeNotification?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActivityReplyLikeNotificationKeySpecifier | (() => undefined | ActivityReplyLikeNotificationKeySpecifier),
		fields?: ActivityReplyLikeNotificationFieldPolicy,
	},
	ActivityReplyNotification?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActivityReplyNotificationKeySpecifier | (() => undefined | ActivityReplyNotificationKeySpecifier),
		fields?: ActivityReplyNotificationFieldPolicy,
	},
	ActivityReplySubscribedNotification?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActivityReplySubscribedNotificationKeySpecifier | (() => undefined | ActivityReplySubscribedNotificationKeySpecifier),
		fields?: ActivityReplySubscribedNotificationFieldPolicy,
	},
	AiringNotification?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AiringNotificationKeySpecifier | (() => undefined | AiringNotificationKeySpecifier),
		fields?: AiringNotificationFieldPolicy,
	},
	AiringProgression?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AiringProgressionKeySpecifier | (() => undefined | AiringProgressionKeySpecifier),
		fields?: AiringProgressionFieldPolicy,
	},
	AiringSchedule?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AiringScheduleKeySpecifier | (() => undefined | AiringScheduleKeySpecifier),
		fields?: AiringScheduleFieldPolicy,
	},
	AiringScheduleConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AiringScheduleConnectionKeySpecifier | (() => undefined | AiringScheduleConnectionKeySpecifier),
		fields?: AiringScheduleConnectionFieldPolicy,
	},
	AiringScheduleEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AiringScheduleEdgeKeySpecifier | (() => undefined | AiringScheduleEdgeKeySpecifier),
		fields?: AiringScheduleEdgeFieldPolicy,
	},
	AniChartUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AniChartUserKeySpecifier | (() => undefined | AniChartUserKeySpecifier),
		fields?: AniChartUserFieldPolicy,
	},
	Character?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CharacterKeySpecifier | (() => undefined | CharacterKeySpecifier),
		fields?: CharacterFieldPolicy,
	},
	CharacterConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CharacterConnectionKeySpecifier | (() => undefined | CharacterConnectionKeySpecifier),
		fields?: CharacterConnectionFieldPolicy,
	},
	CharacterEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CharacterEdgeKeySpecifier | (() => undefined | CharacterEdgeKeySpecifier),
		fields?: CharacterEdgeFieldPolicy,
	},
	CharacterImage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CharacterImageKeySpecifier | (() => undefined | CharacterImageKeySpecifier),
		fields?: CharacterImageFieldPolicy,
	},
	CharacterName?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CharacterNameKeySpecifier | (() => undefined | CharacterNameKeySpecifier),
		fields?: CharacterNameFieldPolicy,
	},
	CharacterSubmission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CharacterSubmissionKeySpecifier | (() => undefined | CharacterSubmissionKeySpecifier),
		fields?: CharacterSubmissionFieldPolicy,
	},
	CharacterSubmissionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CharacterSubmissionConnectionKeySpecifier | (() => undefined | CharacterSubmissionConnectionKeySpecifier),
		fields?: CharacterSubmissionConnectionFieldPolicy,
	},
	CharacterSubmissionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CharacterSubmissionEdgeKeySpecifier | (() => undefined | CharacterSubmissionEdgeKeySpecifier),
		fields?: CharacterSubmissionEdgeFieldPolicy,
	},
	Continent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContinentKeySpecifier | (() => undefined | ContinentKeySpecifier),
		fields?: ContinentFieldPolicy,
	},
	Country?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CountryKeySpecifier | (() => undefined | CountryKeySpecifier),
		fields?: CountryFieldPolicy,
	},
	Deleted?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeletedKeySpecifier | (() => undefined | DeletedKeySpecifier),
		fields?: DeletedFieldPolicy,
	},
	Favourites?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FavouritesKeySpecifier | (() => undefined | FavouritesKeySpecifier),
		fields?: FavouritesFieldPolicy,
	},
	FollowingNotification?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FollowingNotificationKeySpecifier | (() => undefined | FollowingNotificationKeySpecifier),
		fields?: FollowingNotificationFieldPolicy,
	},
	FormatStats?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FormatStatsKeySpecifier | (() => undefined | FormatStatsKeySpecifier),
		fields?: FormatStatsFieldPolicy,
	},
	FuzzyDate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FuzzyDateKeySpecifier | (() => undefined | FuzzyDateKeySpecifier),
		fields?: FuzzyDateFieldPolicy,
	},
	GenreStats?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GenreStatsKeySpecifier | (() => undefined | GenreStatsKeySpecifier),
		fields?: GenreStatsFieldPolicy,
	},
	InternalPage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InternalPageKeySpecifier | (() => undefined | InternalPageKeySpecifier),
		fields?: InternalPageFieldPolicy,
	},
	Language?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LanguageKeySpecifier | (() => undefined | LanguageKeySpecifier),
		fields?: LanguageFieldPolicy,
	},
	ListActivity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ListActivityKeySpecifier | (() => undefined | ListActivityKeySpecifier),
		fields?: ListActivityFieldPolicy,
	},
	ListActivityOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ListActivityOptionKeySpecifier | (() => undefined | ListActivityOptionKeySpecifier),
		fields?: ListActivityOptionFieldPolicy,
	},
	ListScoreStats?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ListScoreStatsKeySpecifier | (() => undefined | ListScoreStatsKeySpecifier),
		fields?: ListScoreStatsFieldPolicy,
	},
	Media?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaKeySpecifier | (() => undefined | MediaKeySpecifier),
		fields?: MediaFieldPolicy,
	},
	MediaCharacter?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaCharacterKeySpecifier | (() => undefined | MediaCharacterKeySpecifier),
		fields?: MediaCharacterFieldPolicy,
	},
	MediaConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaConnectionKeySpecifier | (() => undefined | MediaConnectionKeySpecifier),
		fields?: MediaConnectionFieldPolicy,
	},
	MediaCoverImage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaCoverImageKeySpecifier | (() => undefined | MediaCoverImageKeySpecifier),
		fields?: MediaCoverImageFieldPolicy,
	},
	MediaDataChangeNotification?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaDataChangeNotificationKeySpecifier | (() => undefined | MediaDataChangeNotificationKeySpecifier),
		fields?: MediaDataChangeNotificationFieldPolicy,
	},
	MediaDeletionNotification?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaDeletionNotificationKeySpecifier | (() => undefined | MediaDeletionNotificationKeySpecifier),
		fields?: MediaDeletionNotificationFieldPolicy,
	},
	MediaEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaEdgeKeySpecifier | (() => undefined | MediaEdgeKeySpecifier),
		fields?: MediaEdgeFieldPolicy,
	},
	MediaExternalLink?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaExternalLinkKeySpecifier | (() => undefined | MediaExternalLinkKeySpecifier),
		fields?: MediaExternalLinkFieldPolicy,
	},
	MediaList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaListKeySpecifier | (() => undefined | MediaListKeySpecifier),
		fields?: MediaListFieldPolicy,
	},
	MediaListCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaListCollectionKeySpecifier | (() => undefined | MediaListCollectionKeySpecifier),
		fields?: MediaListCollectionFieldPolicy,
	},
	MediaListGroup?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaListGroupKeySpecifier | (() => undefined | MediaListGroupKeySpecifier),
		fields?: MediaListGroupFieldPolicy,
	},
	MediaListOptions?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaListOptionsKeySpecifier | (() => undefined | MediaListOptionsKeySpecifier),
		fields?: MediaListOptionsFieldPolicy,
	},
	MediaListTypeOptions?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaListTypeOptionsKeySpecifier | (() => undefined | MediaListTypeOptionsKeySpecifier),
		fields?: MediaListTypeOptionsFieldPolicy,
	},
	MediaMergeNotification?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaMergeNotificationKeySpecifier | (() => undefined | MediaMergeNotificationKeySpecifier),
		fields?: MediaMergeNotificationFieldPolicy,
	},
	MediaRank?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaRankKeySpecifier | (() => undefined | MediaRankKeySpecifier),
		fields?: MediaRankFieldPolicy,
	},
	MediaStats?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaStatsKeySpecifier | (() => undefined | MediaStatsKeySpecifier),
		fields?: MediaStatsFieldPolicy,
	},
	MediaStreamingEpisode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaStreamingEpisodeKeySpecifier | (() => undefined | MediaStreamingEpisodeKeySpecifier),
		fields?: MediaStreamingEpisodeFieldPolicy,
	},
	MediaSubmission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaSubmissionKeySpecifier | (() => undefined | MediaSubmissionKeySpecifier),
		fields?: MediaSubmissionFieldPolicy,
	},
	MediaSubmissionComparison?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaSubmissionComparisonKeySpecifier | (() => undefined | MediaSubmissionComparisonKeySpecifier),
		fields?: MediaSubmissionComparisonFieldPolicy,
	},
	MediaSubmissionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaSubmissionEdgeKeySpecifier | (() => undefined | MediaSubmissionEdgeKeySpecifier),
		fields?: MediaSubmissionEdgeFieldPolicy,
	},
	MediaTag?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaTagKeySpecifier | (() => undefined | MediaTagKeySpecifier),
		fields?: MediaTagFieldPolicy,
	},
	MediaTitle?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaTitleKeySpecifier | (() => undefined | MediaTitleKeySpecifier),
		fields?: MediaTitleFieldPolicy,
	},
	MediaTrailer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaTrailerKeySpecifier | (() => undefined | MediaTrailerKeySpecifier),
		fields?: MediaTrailerFieldPolicy,
	},
	MediaTrend?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaTrendKeySpecifier | (() => undefined | MediaTrendKeySpecifier),
		fields?: MediaTrendFieldPolicy,
	},
	MediaTrendConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaTrendConnectionKeySpecifier | (() => undefined | MediaTrendConnectionKeySpecifier),
		fields?: MediaTrendConnectionFieldPolicy,
	},
	MediaTrendEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaTrendEdgeKeySpecifier | (() => undefined | MediaTrendEdgeKeySpecifier),
		fields?: MediaTrendEdgeFieldPolicy,
	},
	MessageActivity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MessageActivityKeySpecifier | (() => undefined | MessageActivityKeySpecifier),
		fields?: MessageActivityFieldPolicy,
	},
	ModAction?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ModActionKeySpecifier | (() => undefined | ModActionKeySpecifier),
		fields?: ModActionFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	NotificationOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NotificationOptionKeySpecifier | (() => undefined | NotificationOptionKeySpecifier),
		fields?: NotificationOptionFieldPolicy,
	},
	Page?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageKeySpecifier | (() => undefined | PageKeySpecifier),
		fields?: PageFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	ParsedMarkdown?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ParsedMarkdownKeySpecifier | (() => undefined | ParsedMarkdownKeySpecifier),
		fields?: ParsedMarkdownFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Recommendation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RecommendationKeySpecifier | (() => undefined | RecommendationKeySpecifier),
		fields?: RecommendationFieldPolicy,
	},
	RecommendationConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RecommendationConnectionKeySpecifier | (() => undefined | RecommendationConnectionKeySpecifier),
		fields?: RecommendationConnectionFieldPolicy,
	},
	RecommendationEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RecommendationEdgeKeySpecifier | (() => undefined | RecommendationEdgeKeySpecifier),
		fields?: RecommendationEdgeFieldPolicy,
	},
	RelatedMediaAdditionNotification?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RelatedMediaAdditionNotificationKeySpecifier | (() => undefined | RelatedMediaAdditionNotificationKeySpecifier),
		fields?: RelatedMediaAdditionNotificationFieldPolicy,
	},
	Report?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReportKeySpecifier | (() => undefined | ReportKeySpecifier),
		fields?: ReportFieldPolicy,
	},
	Review?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReviewKeySpecifier | (() => undefined | ReviewKeySpecifier),
		fields?: ReviewFieldPolicy,
	},
	ReviewConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReviewConnectionKeySpecifier | (() => undefined | ReviewConnectionKeySpecifier),
		fields?: ReviewConnectionFieldPolicy,
	},
	ReviewEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReviewEdgeKeySpecifier | (() => undefined | ReviewEdgeKeySpecifier),
		fields?: ReviewEdgeFieldPolicy,
	},
	RevisionHistory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RevisionHistoryKeySpecifier | (() => undefined | RevisionHistoryKeySpecifier),
		fields?: RevisionHistoryFieldPolicy,
	},
	ScoreDistribution?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ScoreDistributionKeySpecifier | (() => undefined | ScoreDistributionKeySpecifier),
		fields?: ScoreDistributionFieldPolicy,
	},
	SiteStatistics?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SiteStatisticsKeySpecifier | (() => undefined | SiteStatisticsKeySpecifier),
		fields?: SiteStatisticsFieldPolicy,
	},
	SiteTrend?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SiteTrendKeySpecifier | (() => undefined | SiteTrendKeySpecifier),
		fields?: SiteTrendFieldPolicy,
	},
	SiteTrendConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SiteTrendConnectionKeySpecifier | (() => undefined | SiteTrendConnectionKeySpecifier),
		fields?: SiteTrendConnectionFieldPolicy,
	},
	SiteTrendEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SiteTrendEdgeKeySpecifier | (() => undefined | SiteTrendEdgeKeySpecifier),
		fields?: SiteTrendEdgeFieldPolicy,
	},
	Staff?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StaffKeySpecifier | (() => undefined | StaffKeySpecifier),
		fields?: StaffFieldPolicy,
	},
	StaffConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StaffConnectionKeySpecifier | (() => undefined | StaffConnectionKeySpecifier),
		fields?: StaffConnectionFieldPolicy,
	},
	StaffEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StaffEdgeKeySpecifier | (() => undefined | StaffEdgeKeySpecifier),
		fields?: StaffEdgeFieldPolicy,
	},
	StaffImage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StaffImageKeySpecifier | (() => undefined | StaffImageKeySpecifier),
		fields?: StaffImageFieldPolicy,
	},
	StaffName?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StaffNameKeySpecifier | (() => undefined | StaffNameKeySpecifier),
		fields?: StaffNameFieldPolicy,
	},
	StaffRoleType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StaffRoleTypeKeySpecifier | (() => undefined | StaffRoleTypeKeySpecifier),
		fields?: StaffRoleTypeFieldPolicy,
	},
	StaffStats?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StaffStatsKeySpecifier | (() => undefined | StaffStatsKeySpecifier),
		fields?: StaffStatsFieldPolicy,
	},
	StaffSubmission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StaffSubmissionKeySpecifier | (() => undefined | StaffSubmissionKeySpecifier),
		fields?: StaffSubmissionFieldPolicy,
	},
	State?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StateKeySpecifier | (() => undefined | StateKeySpecifier),
		fields?: StateFieldPolicy,
	},
	StatusDistribution?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StatusDistributionKeySpecifier | (() => undefined | StatusDistributionKeySpecifier),
		fields?: StatusDistributionFieldPolicy,
	},
	Studio?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StudioKeySpecifier | (() => undefined | StudioKeySpecifier),
		fields?: StudioFieldPolicy,
	},
	StudioConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StudioConnectionKeySpecifier | (() => undefined | StudioConnectionKeySpecifier),
		fields?: StudioConnectionFieldPolicy,
	},
	StudioEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StudioEdgeKeySpecifier | (() => undefined | StudioEdgeKeySpecifier),
		fields?: StudioEdgeFieldPolicy,
	},
	StudioStats?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StudioStatsKeySpecifier | (() => undefined | StudioStatsKeySpecifier),
		fields?: StudioStatsFieldPolicy,
	},
	Subdivision?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubdivisionKeySpecifier | (() => undefined | SubdivisionKeySpecifier),
		fields?: SubdivisionFieldPolicy,
	},
	TagStats?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagStatsKeySpecifier | (() => undefined | TagStatsKeySpecifier),
		fields?: TagStatsFieldPolicy,
	},
	TextActivity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TextActivityKeySpecifier | (() => undefined | TextActivityKeySpecifier),
		fields?: TextActivityFieldPolicy,
	},
	Thread?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ThreadKeySpecifier | (() => undefined | ThreadKeySpecifier),
		fields?: ThreadFieldPolicy,
	},
	ThreadCategory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ThreadCategoryKeySpecifier | (() => undefined | ThreadCategoryKeySpecifier),
		fields?: ThreadCategoryFieldPolicy,
	},
	ThreadComment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ThreadCommentKeySpecifier | (() => undefined | ThreadCommentKeySpecifier),
		fields?: ThreadCommentFieldPolicy,
	},
	ThreadCommentLikeNotification?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ThreadCommentLikeNotificationKeySpecifier | (() => undefined | ThreadCommentLikeNotificationKeySpecifier),
		fields?: ThreadCommentLikeNotificationFieldPolicy,
	},
	ThreadCommentMentionNotification?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ThreadCommentMentionNotificationKeySpecifier | (() => undefined | ThreadCommentMentionNotificationKeySpecifier),
		fields?: ThreadCommentMentionNotificationFieldPolicy,
	},
	ThreadCommentReplyNotification?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ThreadCommentReplyNotificationKeySpecifier | (() => undefined | ThreadCommentReplyNotificationKeySpecifier),
		fields?: ThreadCommentReplyNotificationFieldPolicy,
	},
	ThreadCommentSubscribedNotification?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ThreadCommentSubscribedNotificationKeySpecifier | (() => undefined | ThreadCommentSubscribedNotificationKeySpecifier),
		fields?: ThreadCommentSubscribedNotificationFieldPolicy,
	},
	ThreadLikeNotification?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ThreadLikeNotificationKeySpecifier | (() => undefined | ThreadLikeNotificationKeySpecifier),
		fields?: ThreadLikeNotificationFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserActivityHistory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserActivityHistoryKeySpecifier | (() => undefined | UserActivityHistoryKeySpecifier),
		fields?: UserActivityHistoryFieldPolicy,
	},
	UserAvatar?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserAvatarKeySpecifier | (() => undefined | UserAvatarKeySpecifier),
		fields?: UserAvatarFieldPolicy,
	},
	UserCountryStatistic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserCountryStatisticKeySpecifier | (() => undefined | UserCountryStatisticKeySpecifier),
		fields?: UserCountryStatisticFieldPolicy,
	},
	UserFormatStatistic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserFormatStatisticKeySpecifier | (() => undefined | UserFormatStatisticKeySpecifier),
		fields?: UserFormatStatisticFieldPolicy,
	},
	UserGenreStatistic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserGenreStatisticKeySpecifier | (() => undefined | UserGenreStatisticKeySpecifier),
		fields?: UserGenreStatisticFieldPolicy,
	},
	UserLengthStatistic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserLengthStatisticKeySpecifier | (() => undefined | UserLengthStatisticKeySpecifier),
		fields?: UserLengthStatisticFieldPolicy,
	},
	UserModData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserModDataKeySpecifier | (() => undefined | UserModDataKeySpecifier),
		fields?: UserModDataFieldPolicy,
	},
	UserOptions?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserOptionsKeySpecifier | (() => undefined | UserOptionsKeySpecifier),
		fields?: UserOptionsFieldPolicy,
	},
	UserPreviousName?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserPreviousNameKeySpecifier | (() => undefined | UserPreviousNameKeySpecifier),
		fields?: UserPreviousNameFieldPolicy,
	},
	UserReleaseYearStatistic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserReleaseYearStatisticKeySpecifier | (() => undefined | UserReleaseYearStatisticKeySpecifier),
		fields?: UserReleaseYearStatisticFieldPolicy,
	},
	UserScoreStatistic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserScoreStatisticKeySpecifier | (() => undefined | UserScoreStatisticKeySpecifier),
		fields?: UserScoreStatisticFieldPolicy,
	},
	UserStaffStatistic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserStaffStatisticKeySpecifier | (() => undefined | UserStaffStatisticKeySpecifier),
		fields?: UserStaffStatisticFieldPolicy,
	},
	UserStartYearStatistic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserStartYearStatisticKeySpecifier | (() => undefined | UserStartYearStatisticKeySpecifier),
		fields?: UserStartYearStatisticFieldPolicy,
	},
	UserStatisticTypes?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserStatisticTypesKeySpecifier | (() => undefined | UserStatisticTypesKeySpecifier),
		fields?: UserStatisticTypesFieldPolicy,
	},
	UserStatistics?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserStatisticsKeySpecifier | (() => undefined | UserStatisticsKeySpecifier),
		fields?: UserStatisticsFieldPolicy,
	},
	UserStats?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserStatsKeySpecifier | (() => undefined | UserStatsKeySpecifier),
		fields?: UserStatsFieldPolicy,
	},
	UserStatusStatistic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserStatusStatisticKeySpecifier | (() => undefined | UserStatusStatisticKeySpecifier),
		fields?: UserStatusStatisticFieldPolicy,
	},
	UserStudioStatistic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserStudioStatisticKeySpecifier | (() => undefined | UserStudioStatisticKeySpecifier),
		fields?: UserStudioStatisticFieldPolicy,
	},
	UserTagStatistic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserTagStatisticKeySpecifier | (() => undefined | UserTagStatisticKeySpecifier),
		fields?: UserTagStatisticFieldPolicy,
	},
	UserVoiceActorStatistic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserVoiceActorStatisticKeySpecifier | (() => undefined | UserVoiceActorStatisticKeySpecifier),
		fields?: UserVoiceActorStatisticFieldPolicy,
	},
	YearStats?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | YearStatsKeySpecifier | (() => undefined | YearStatsKeySpecifier),
		fields?: YearStatsFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;