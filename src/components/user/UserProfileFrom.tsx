"use client";

import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { UserType } from "@/lib/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/lib/zodSchema";

const UserProfileFrom = () => {
  const uFrom = useForm<UserType>({
    defaultValues: { email: "", first_name: "", last_name: "", type: "" },
    resolver: zodResolver(userSchema),
    mode: "all",
  });

  const handleSubmit = (uInfo: UserType) => {
    console.log(uInfo);
    uFrom.reset();
  };

  return (
    <>
      <Form {...uFrom}>
        <form onSubmit={uFrom.handleSubmit(handleSubmit)}>
          <Card className="w-[320px]">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                User Profile Card
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={uFrom.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="first_name" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={uFrom.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="last_name" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={uFrom.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="email-address" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={uFrom.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-y-0 space-x-3">
                        <FormControl className="cursor-pointer">
                          <RadioGroupItem value="male" />
                        </FormControl>
                        <FormLabel className="cursor-pointer font-normal">
                          Male
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-y-0 space-x-3">
                        <FormControl className="cursor-pointer">
                          <RadioGroupItem value="female" />
                        </FormControl>
                        <FormLabel className="cursor-pointer font-normal">
                          Female
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full cursor-pointer">
                Submit
              </Button>
            </CardContent>
          </Card>
        </form>
      </Form>
    </>
  );
};

export default UserProfileFrom;
