import { collection } from 'firebase/firestore';
import { db } from '../firebase';
import { Portfolio } from '../types'; // 정의된 포트폴리오 타입을 import

const portfoliosCollection = db.collection('portfolios');

export const createPortfolio = async (portfolioData: Portfolio) => {
  try {
    const response = await portfoliosCollection.add(portfolioData);
    console.log('Portfolio created with ID:', response.id);
    return response.id;
  } catch (error) {
    console.error('Error creating portfolio:', error);
  }
};

export const getPortfolio = async (portfolioId: string) => {
  try {
    const portfolioDoc = await portfoliosCollection.doc(portfolioId).get();
    if (!portfolioDoc.exists) {
      console.log('No such portfolio!');
      return null;
    } else {
      console.log('Portfolio data:', portfolioDoc.data());
      return portfolioDoc.data();
    }
  } catch (error) {
    console.error('Error getting portfolio:', error);
  }
};

export const updatePortfolio = async (portfolioId: string, updatedData: Portfolio) => {
  try {
    await portfoliosCollection.doc(portfolioId).update(updatedData);
    console.log('Portfolio updated successfully');
  } catch (error) {
    console.error('Error updating portfolio:', error);
  }
};

export const deletePortfolio = async (portfolioId: string) => {
  try {
    await portfoliosCollection.doc(portfolioId).delete();
    console.log('Portfolio deleted successfully');
  } catch (error) {
    console.error('Error deleting portfolio:', error);
  }
};
