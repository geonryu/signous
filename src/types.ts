
// 사용자 콜렉션 (users)
export interface Users {
    userId: string;
    email: string;
    name: string;
    nickname :string;
    gender: string;
    profilePicture: string;
    role: string;
    createdAt: Date;
    lastLoginAt: Date;
    userPreferences?: any; // 추후 구체적인 타입으로 정의할 수 있습니다.
    certNaver: boolean;
    certKakao : boolean;
    storeId: string;
    storeName: string;
    favPartners: string[];
    linkStores: string[];
}
  
  // 매장 콜렉션 (stores)
export interface Stores {
    address: string,
    address1 : string,
    address2 : string,
    address3 : string,
    address4 : string,
    category1 : string,
    category2 : string,
    category3 : string,
    certDate : string,
    num : string,
    id: string,
    storeName : string,
    tel : string,
    x : string,
    y : string
}

// 회원사 콜렉션 (memberCompanies)
export interface MemberCompany {
    companyId: string;
    name: string;
    description: string;
    portfolio?: string[]; // 포트폴리오 ID 배열
    subscription: {
    status: string;
    startDate: Date;
    endDate?: Date;
    };
    contactInfo: string;
    rating: number;
    createdAt: Date;
    reviews?: string[]; // 리뷰 ID 배열
}

// 리뷰 콜렉션 (reviews)
export interface ReviewStore {
    reviewId: string;
    userId: string;
    storeId?: string;
    companyId?: string;
    rating: number;
    comment: string;
    createdAt: Date;
}
export interface ReviewPartner {
    reviewId: string;
    userId: string;
    storeId?: string;
    companyId?: string;
    rating: number;
    comment: string;
    createdAt: Date;
}
// 게시글 콜렉션 (posts)
export interface Posts {
    postId: string;
    userId: string;
    category: string;
    title: string;
    content: string;
    images?: string[];
    createdAt: Date;
    updatedAt: Date;
}
export interface Comments {

}

// 마케팅 캠페인 콜렉션 (marketingCampaigns)
export interface MarketingCampaigns {
    campaignId: string;
    name: string;
    type: string;
    targetAudience: string;
    content: string;
    startDate: Date;
    endDate: Date;
    metrics?: any; // 추후 구체적인 타입으로 정의할 수 있습니다.
}

// 포트폴리오 콜렉션 (portfolios)
export interface Portfolios {
    portfolioId: string;
    partnersId: string;
    title: string;
    description: string;
    images: string[];
    documents?: string[];
    createdAt: Date;
    updatedAt: Date;
    scrabCount: string;
    reply : string[];
}
    