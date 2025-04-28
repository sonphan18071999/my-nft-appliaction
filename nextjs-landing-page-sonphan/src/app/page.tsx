"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect } from "react";

const LandingPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center px-4 pt-20"
      >
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Welcome to NFT Marketplace
        </h1>
        <p className="text-xl mb-8">
          Discover, collect, and sell extraordinary NFTs on the world's first
          and largest marketplace
        </p>
        <div className="space-y-4">
          <motion.button
            onClick={() => router.push("/home")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg"
          >
            Start Shopping
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-6xl w-full"
      >
        <motion.div
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-gray-800 bg-opacity-50 p-6 rounded-xl"
        >
          <h3 className="text-xl font-bold mb-2">Discover</h3>
          <p className="text-gray-300">
            Explore thousands of unique digital assets created by artists
            worldwide
          </p>
        </motion.div>
        <motion.div
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-gray-800 bg-opacity-50 p-6 rounded-xl"
        >
          <h3 className="text-xl font-bold mb-2">Collect</h3>
          <p className="text-gray-300">
            Build your collection with rare and exclusive NFTs from top creators
          </p>
        </motion.div>
        <motion.div
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-gray-800 bg-opacity-50 p-6 rounded-xl"
        >
          <h3 className="text-xl font-bold mb-2">Trade</h3>
          <p className="text-gray-300">
            Buy, sell, and trade NFTs with ease on our secure marketplace
          </p>
        </motion.div>
      </motion.div>

      {/* Featured Collection Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 w-full px-4 max-w-6xl"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Collections</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our handpicked selection of the most unique and valuable NFT
            collections
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800 rounded-xl overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-600 flex items-center justify-center">
                <span className="text-xl font-bold">Featured NFT {i}</span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">
                  Collection Name {i}
                </h3>
                <p className="text-gray-300 mb-4">Created by Artist {i}</p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-400 font-medium">
                    Floor: 0.5 ETH
                  </span>
                  <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full text-sm">
                    View Collection
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full bg-gray-900 py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Learn how to get started with buying, selling, and trading NFTs on
              our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Connect Wallet",
                desc: "Connect your cryptocurrency wallet to start buying and selling NFTs",
              },
              {
                title: "Browse NFTs",
                desc: "Explore thousands of unique digital collectibles from artists around the world",
              },
              {
                title: "Make Transactions",
                desc: "Buy, bid, or make offers on your favorite digital assets securely",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-6 rounded-xl relative"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center font-bold text-xl">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 mt-2">{step.title}</h3>
                <p className="text-gray-300">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 w-full px-4 max-w-6xl mx-auto"
      >
        <div className="bg-gradient-to-r from-purple-900 to-pink-900 p-8 md:p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates on new drops,
            trending collections, and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow p-3 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-500"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-full"
            >
              Subscribe
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            NFT Marketplace
          </h2>
          <div className="flex justify-center space-x-6 mb-8">
            {["Twitter", "Discord", "Instagram", "Medium"].map((social, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-white"
              >
                {social}
              </motion.a>
            ))}
          </div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} NFT Marketplace. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
