import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const GrantsTable = () => {
  const data = [
    {
      category: "Grants",
      opportunities: [
        {
          name: "Ethereum Foundation Grants",
          description:
            "Supports public goods, research, and development in the Ethereum ecosystem.",
        },
        {
          name: "Uniswap Grants Program",
          description:
            "Focuses on advancing the Uniswap protocol and ecosystem.",
        },
        {
          name: "Aave Grants Program",
          description: "Funds developers building on the Aave protocol.",
        },
        {
          name: "ENS Grants DAO",
          description:
            "Funds projects and initiatives in the Ethereum Name Service ecosystem.",
        },
        {
          name: "Protocol Guild",
          description: "Supports Ethereum core protocol contributors.",
        },
      ],
    },
    {
      category: "Bounties",
      opportunities: [
        {
          name: "Gitcoin Bounties",
          description:
            "A platform offering various tasks and challenges, often tied to Web3 development and open-source contributions.",
        },
        {
          name: "Buidl Guidl Bounties",
          description:
            "Focused on onboarding developers and advancing Ethereum projects.",
        },
        {
          name: "Protocol Bug Bounty Programs",
          description:
            "Ethereum Foundation Bug Bounty (security-related issues in Ethereum). Polygon, Arbitrum, and Optimism bug bounty programs.",
        },
      ],
    },
    {
      category: "Crowdfunding",
      opportunities: [
        {
          name: "Gitcoin Grants",
          description:
            "Uses quadratic funding to support community-voted public goods.",
        },
        {
          name: "Mirror Crowdfunding",
          description:
            "Allows creators to raise funds through tokenized campaigns.",
        },
        {
          name: "Juicebox",
          description:
            "A decentralized funding platform for projects, DAOs, and creators.",
        },
      ],
    },
    {
      category: "Ecosystem Funds",
      opportunities: [
        {
          name: "Polygon Ecosystem Fund",
          description: "Supports developers building on Polygon.",
        },
        {
          name: "Arbitrum Foundation",
          description:
            "Provides financial and technical support for projects in the Arbitrum ecosystem.",
        },
        {
          name: "zkSync Ecosystem Fund",
          description:
            "Dedicated to advancing projects using zkSync's scaling technology.",
        },
        {
          name: "Optimism Collective",
          description:
            "Funds retroactive public goods and projects aligned with Optimism's vision.",
        },
        {
          name: "StarkNet Ecosystem Fund",
          description:
            "Encourages development on StarkNet's ZK-rollup platform.",
        },
      ],
    },
    {
      category: "Retroactive Funding",
      opportunities: [
        {
          name: "Optimism Retroactive Public Goods Funding (RPGF)",
          description:
            "Rewards past contributions to public goods that benefit the Optimism ecosystem.",
        },
        {
          name: "Gitcoin Quadratic Funding",
          description:
            "Retroactively supports impactful projects based on community contributions.",
        },
      ],
    },
    {
      category: "DAO Allocations",
      opportunities: [
        {
          name: "Moloch DAO",
          description:
            "Funds Ethereum ecosystem initiatives, especially public goods.",
        },
        {
          name: "MetaCartel DAO",
          description:
            "Focuses on supporting decentralized applications (dApps).",
        },
        {
          name: "Gitcoin DAO",
          description: "Oversees community-driven funding for public goods.",
        },
        {
          name: "Gnosis DAO",
          description:
            "Allocates funds to projects advancing the Gnosis ecosystem.",
        },
        {
          name: "Shapeshift DAO",
          description:
            "Funds open-source and community-focused crypto initiatives.",
        },
      ],
    },
    {
      category: "Venture Capital & Investments",
      opportunities: [
        {
          name: "ConsenSys Mesh",
          description: "Invests in and incubates Web3 startups.",
        },
        {
          name: "Paradigm",
          description:
            "Provides funding for blockchain and cryptocurrency projects.",
        },
        {
          name: "a16z Crypto",
          description:
            "A venture fund by Andreessen Horowitz for blockchain-based startups.",
        },
        {
          name: "Framework Ventures",
          description: "Focuses on DeFi and Web3 projects.",
        },
        {
          name: "Hashed",
          description:
            "A fund that supports Web3 startups and blockchain technology.",
        },
      ],
    },
    {
      category: "Revenue Sharing & Partnerships",
      opportunities: [
        {
          name: "Balancer Liquidity Mining Program",
          description:
            "Shares trading fees with liquidity providers and protocol participants.",
        },
        {
          name: "Uniswap Fee Sharing",
          description: "Revenue-sharing models through liquidity pools.",
        },
        {
          name: "Partnership Programs",
          description:
            "Offered by platforms like Chainlink, which fund integrations and collaborations.",
        },
      ],
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-48">Category</TableHead>
            <TableHead className="w-64">Name</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((category) =>
            category.opportunities.map((opportunity, index) => (
              <TableRow key={`${category.category}-${opportunity.name}`}>
                {index === 0 ? (
                  <TableCell
                    className="font-medium"
                    rowSpan={category.opportunities.length}
                  >
                    {category.category}
                  </TableCell>
                ) : null}
                <TableCell className="font-medium">
                  {opportunity.name}
                </TableCell>
                <TableCell>{opportunity.description}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default GrantsTable;
