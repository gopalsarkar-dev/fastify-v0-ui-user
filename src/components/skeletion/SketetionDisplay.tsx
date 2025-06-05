import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const SketetionDisplay = () => {
  return (
    <>
      <div className="pt-24">
        <Card className="w-[320px]">
          <CardHeader>
            <CardTitle className="grid place-items-center">
              <Skeleton className="h-7 w-[230px]" />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3">
              <Skeleton className="h-6 w-[80px]" />
              <Skeleton className="h-6 w-[150px]" />
            </div>
            <div className="flex gap-3">
              <Skeleton className="h-6 w-[50px]" />
              <Skeleton className="h-6 w-[150px]" />
            </div>
            <div className="flex gap-3">
              <Skeleton className="h-6 w-[50px]" />
              <Skeleton className="h-6 w-[80px]" />
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-center gap-6">
            <Skeleton className="h-10 w-[100px]" />
            <Skeleton className="h-10 w-[100px]" />
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default SketetionDisplay;
