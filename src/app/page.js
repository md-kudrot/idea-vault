import Hero from "@/components/hero/Hero";
import HowToWork from "@/components/howToWork/HowToWork";
import PopularCategories from "@/components/PopularCategories/PopularCategories";
import TopContributor from "@/components/topContributor/TopContributor";
import TrendingIdea from "@/components/trendingIdeas/TrendingIdea";


export default function Home() {
  return (
    <div>
    <Hero></Hero>
    <TrendingIdea></TrendingIdea>
    <PopularCategories></PopularCategories>
    <HowToWork></HowToWork>
    <TopContributor></TopContributor>
    </div>
  );
}
