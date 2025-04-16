import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FreeCard from "../FreeCard/FreeCard";

const FromStartUpCard = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-center mt-16">
      <Tabs defaultValue="Billed Monthly" className="">
        <TabsList className="grid w-[288px] mx-auto grid-cols-2">
          <TabsTrigger value="Billed Monthly">Billed Monthly</TabsTrigger>
          <TabsTrigger value="Billed Annualy">Billed Annualy</TabsTrigger>
        </TabsList>
        <div className="flex justify-center gap-y-[20px] xl:gap-8 mt-9">
          <TabsContent className="flex flex-col xl:flex-row gap-8 justify-center " value="Billed Monthly">
            <FreeCard title={"Free"} price={"$0"} />
            <FreeCard title={"Basic"} price={"$39"} />
            <FreeCard
              title={"Pro"}
              price={"$59"}
              bgColor={"black"}
              textColor={"text-[#FFF]"}
              btnBg={"bg-[#FFF]"}
            />
            <FreeCard title={"Enterprise"} price={"$129"} />
          </TabsContent>
          <TabsContent className="flex justify-center flex-col xl:flex-row gap-8  " value="Billed Annualy">
            <FreeCard title={"Enterprise"} price={"$129"} />
            <FreeCard title={"Pro"} price={"$59"} />
            <FreeCard title={"Basic"} price={"$39"} />
            <FreeCard
              title={"Pro"}
              price={"$59"}
              bgColor={"black"}
              textColor={"text-[#FFF]"}
              btnBg={"bg-[#FFF]"}
            />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default FromStartUpCard;
