"use client";
import {
  Button,
  Container,
  Divider,
  Group,
  Pagination,
  Rating,
  Text,
  Textarea,
  Title,
} from "@mantine/core";
import { Footer } from "@/components/Footer";
export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>

      <Title order={4} mt="sm">
        Your rating
      </Title>
      <Rating defaultValue={0} size="lg"></Rating>

      <Textarea
        label="Your review"
        mt="xs"
        placeholder="Do you enjoy eating?"
        minRows={3}
      ></Textarea>

      <Button color="orange" mt="xs">
        Submit Review
      </Button>

      <Divider my="sm" />

      <Group position="center">
        <Title order={4}>Elon Musk</Title>
        <Rating defaultValue={5} size="sm"></Rating>
      </Group>
      <Text ta="center" c="dimmed">
        Best pizza in this world. I give you X score.
      </Text>

      <Divider my="sm" />

      <Group position="center">
        <Title order={4}>Mark Zuck</Title>
        <Rating defaultValue={4} size="sm"></Rating>
      </Group>
      <Text ta="center" c="dimmed">
        My favourite part is pepperoni
      </Text>

      <Pagination total={20} color="orange" position="center" mt="md" />

      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Kittiwin Phannachet 650610747
      </Text>

      {/* <Text align="center" color="dimmed" my="sm">
        <Footer year="2023" name="Kittiwin Phannachet" code="650610747"></Footer>
      </Text> */}
    </Container>
  );
}
