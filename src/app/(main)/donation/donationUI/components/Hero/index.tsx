"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Checkbox,
  Divider,
  Flex,
  HStack,
  Image,
  Tag,
  TagLabel,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { ETHABJ_SVG } from "@/assets/svg";
import "../../../../../globals.css";
import { Address } from "viem";
import Web3Donation from "./web3-donation";
import ManualDonation from "./manual-donation";
import { useAppSelector } from "@/hooks/rtkHooks";
import { RootState } from "@/store/store";
import Link from "next/link";

const HeroSponsorPage = () => {
  const _donationToken = useAppSelector(
    (state: RootState) => state.donationTokenSlice.tokenAddress
  );
  useEffect(() => {
    console.log(
      "this is donation token address at initial load",
      _donationToken
    );
  }, []);
  const [copyAddress, setCopyAddress] = useState<boolean>(false);
  const [addName, setAddName] = useState<boolean>(false);

  ///***FN to handle the Checkbox of Copy Address
  const handleCopyAddress = () => {
    setCopyAddress((prevCopyAddress) => !prevCopyAddress);
    if (addName) setAddName(false);
  };

  //***FN to handle the Checkbox of AddName
  const handleAddName = () => {
    setAddName((prevAddName) => !prevAddName);
    if (copyAddress) setCopyAddress(false);
  };

  return (
    <Box
      py={["7rem", "7rem", "5rem", "5rem"]}
      bgImage="url('image/donation-hero-page.png')"
      bgSize={"cover"}
      bgPos={["0 -90px", "inherit", "inherit"]}
    >
      <Flex flexDir={"column"} gap={"6rem"}>
        <Flex
          flexDir={"column"}
          maxW={"700px"}
          mx={"auto"}
          alignItems={"center"}
          gap={"12px"}
          px={".5rem"}
        >
          <HStack>
            <Tag size="lg" colorScheme="red" borderRadius="full">
              <TagLabel>Beta</TagLabel>
            </Tag>
          </HStack>
          <Text
            color={"#060606"}
            textAlign="center"
            fontWeight={"600"}
            fontSize={["32px", "32px", "64px", "64px"]}
            lineHeight={["38.4px", "38.4px", "76.8px", "76.8px"]}
          >
            Sponsor ETHAbuja
          </Text>
          <Text
            textAlign="center"
            fontWeight={"500"}
            fontSize={"14px"}
            lineHeight={"23.1px"}
          >
            The people behind ETHAbuja are passionate individual building
            solutions for the growth of their communities. You can show your
            support by contributing to our collective.
          </Text>

          <Text
            mt="20px"
            textAlign="center"
            fontWeight={"500"}
            fontSize={"16px"}
            lineHeight={"23.1px"}
          >
            Claim your{" "}
            <Text
              textDecoration="underline"
              fontWeight={700}
              as={Link}
              href="/faucet"
            >
              Faucet
            </Text>{" "}
            here to participate and test
          </Text>
        </Flex>

        <Box>
          <Flex justifyContent={"center"} px={["1rem", "1rem", "1rem", "0"]}>
            <Box
              w={["100%", "100%", "100%", "776px"]}
              h={"auto"}
              borderRadius={"16px"}
              border={"1px solid #D6D1F0"}
              bg={"#FFF"}
            >
              <Box
                py={"24px"}
                pl={["1rem", "48px", "48px"]}
                pr={["1rem,", "0", "0"]}
              >
                {/* begining of the box */}
                {/* top image and box heading */}
                <Flex
                  w={["100%", "313px", "313px"]}
                  flexDir={["column", "row", "row"]}
                  alignItems={"center"}
                  gap={"16px"}
                >
                  <Image
                    src="image/Heart compartment.png"
                    w={"64px"}
                    h={"64px"}
                    alt="an image"
                  />
                  <Text
                    color={"#060606"}
                    fontSize={"18px"}
                    fontWeight={"600"}
                    lineHeight={"22.5px"}
                    letterSpacing={"0.18px"}
                    textAlign={["center", "left", "left"]}
                  >
                    Sponsor the ETHAbuja Maintainers
                  </Text>
                </Flex>
              </Box>
              <Divider />
              <Box px={["24px", "24px", "24px", "48px"]} py={"24px"}>
                <Box mb={"2rem"}>
                  <Flex flexDir={["column", "row", "row"]} gap={"16px"}>
                    <Flex
                      display={"inline-flex"}
                      gap={"4px"}
                      alignItems={"center"}
                    >
                      <Checkbox
                        isChecked={copyAddress}
                        onChange={handleCopyAddress}
                        _checked={{
                          "& .chakra-checkbox__control": {
                            background: "#8140CE",
                            borderColor: "#8140CE",
                            borderRadius: "50px",
                          },
                        }}
                      >
                        <Text
                          color={"#1D2E32"}
                          fontSize={"14px"}
                          fontWeight={"500"}
                        >
                          Copy address Instead
                        </Text>
                      </Checkbox>
                      <Tooltip
                        label="If you feel uncomfortable connecting your wallet, you can always just copy the address and send from your metamask instead"
                        placement="top"
                        border="0.4px solid #8140CE"
                        color="black"
                        fontSize={"12px"}
                        borderRadius={"8px"}
                        textAlign={"center"}
                        p={".5rem"}
                        bgColor="white"
                      >
                        {ETHABJ_SVG().questionMark()}
                      </Tooltip>
                    </Flex>

                    <Flex
                      display={"inline-flex"}
                      gap={"4px"}
                      alignItems={"center"}
                    >
                      <Checkbox
                        isChecked={addName}
                        onChange={handleAddName}
                        _checked={{
                          "& .chakra-checkbox__control": {
                            background: "#8140CE",
                            borderColor: "#8140CE",
                            borderRadius: "50px",
                          },
                        }}
                      >
                        <Text
                          color={"#1D2E32"}
                          fontSize={"14px"}
                          fontWeight={"500"}
                        >
                          Add name as sponsor
                        </Text>
                      </Checkbox>
                      <Tooltip
                        label="Get your name on the wall of sponsors below, nothing big, just a fun way to say thank you"
                        placement="top"
                        border="0.4px solid #8140CE"
                        color="black"
                        fontSize={"12px"}
                        borderRadius={"8px"}
                        textAlign={"center"}
                        p={".5rem"}
                        bgColor="white"
                      >
                        {ETHABJ_SVG().questionMark()}
                      </Tooltip>
                    </Flex>
                  </Flex>
                </Box>

                {copyAddress ? (
                  <ManualDonation />
                ) : (
                  <Box>
                    <Web3Donation
                      addName={addName}
                      _donationToken={_donationToken as Address}
                    />
                  </Box>
                )}
              </Box>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
export default HeroSponsorPage;
