"use client";

import { UserType } from "@/lib/type";
import { userSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import createNewUser from "../controllers/hooks/createNewUser";
import { Button } from "../ui/button";
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
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const UserProfileFrom = () => {
  const uFrom = useForm<UserType>({
    defaultValues: { email: "", first_name: "", last_name: "", gender: "male" },
    resolver: zodResolver(userSchema),
    mode: "all",
  });

  const handleSubmit = async (uInfo: UserType) => {
    const { message, success } = await createNewUser(uInfo);
    if (!success) {
      toast.error(message);
    }

    if (success) {
      toast.success(message);
      uFrom.reset();
    }
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
                name="gender"
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
