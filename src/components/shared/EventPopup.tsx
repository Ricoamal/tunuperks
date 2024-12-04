import React from 'react';
import { Portal } from 'react-portal';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift } from 'lucide-react';
import { isChristmas } from '../../utils/dateUtils';

type EventPopupProps = {
  onClose: () => void;
};

const EventPopup = ({ onClose }: EventPopupProps) => {
  return (
    <Portal>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl p-8 max-w-lg w-full relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift className="w-8 h-8 text-blue-600" />
              </div>
              
              <h2 className="text-2xl font-bold mb-4">
                Special Holiday Offer! 🎉
              </h2>
              <p className="text-gray-600 mb-6">
                Get an extra 20% off on all premium memberships this holiday season.
                Don't miss out on this limited-time offer!
              </p>
              
              <div className="space-y-3">
                <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium">
                  Claim Offer
                </button>
                <button
                  onClick={onClose}
                  className="w-full px-6 py-3 text-gray-600 hover:bg-gray-100 rounded-xl font-medium"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </Portal>
  );
};

export default EventPopup;