
// 사용자 콜렉션 (users)
export interface User {
    userId: string;
    email: string;
    passwordHash: string;
    name: string;
    profilePicture: string;
    role: string;
    createdAt: Date;
    lastLoginAt: Date;
    userPreferences?: any; // 추후 구체적인 타입으로 정의할 수 있습니다.
    mfaEnabled: boolean;
  }
  
  // 매장 콜렉션 (stores)
  export interface Store {
    storeId: string;
    ownerId: string;
    name: string;
    description: string;
    location: {
      lat: number;
      lng: number;
    };
    address: string;
    contactInfo: string;
    images: string[];
    createdAt: Date;
    reviews?: string[]; // 리뷰 ID 배열
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
  export interface Review {
    reviewId: string;
    userId: string;
    storeId?: string;
    companyId?: string;
    rating: number;
    comment: string;
    createdAt: Date;
  }
  
  // 즐겨찾기 콜렉션 (favorites)
  export interface Favorite {
    favoriteId: string;
    userId: string;
    storeIds: string[];
    companyIds: string[];
    createdAt: Date;
  }
  
  // 게시글 콜렉션 (posts)
  export interface Post {
    postId: string;
    userId: string;
    category: string;
    title: string;
    content: string;
    images?: string[];
    createdAt: Date;
    updatedAt: Date;
  }
  
  // 마케팅 캠페인 콜렉션 (marketingCampaigns)
  export interface MarketingCampaign {
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
  export interface Portfolio {
    portfolioId: string;
    companyId: string;
    title: string;
    description: string;
    images: string[];
    documents?: string[];
    createdAt: Date;
    updatedAt: Date;
  }
  